const test = require('node:test');
const assert = require('node:assert/strict');
const renderContributorCard = require('../render/contributor');
const { parseLimit, usernamePattern } =
  require('../routes/contributor').internal;

test('contributor query validation accepts GitHub usernames', () => {
  assert.equal(usernamePattern.test('StaryMoon'), true);
  assert.equal(usernamePattern.test('-invalid'), false);
  assert.equal(usernamePattern.test('invalid_underscore'), false);
  assert.equal(parseLimit(0), 1);
  assert.equal(parseLimit(9), 5);
});

test('contributor renderer escapes untrusted API text', () => {
  const svg = renderContributorCard(
    {
      username: '<script>',
      mergedPullRequests: 5,
      analyzedPullRequests: 3,
      upstreamRepositories: 2,
      upstreamStars: 12345,
      upstreamDataComplete: true,
      topRepository: { name: 'owner/repo', stars: 12000 },
      recentPullRequests: [
        { repository: 'owner/repo', title: '<unsafe & title>' },
      ],
      limit: 3,
      theme: 'light',
    },
    'en'
  );

  assert.match(svg, /&lt;script&gt;/);
  assert.match(svg, /&lt;unsafe &amp; title&gt;/);
  assert.doesNotMatch(svg, /<script>/);
  assert.match(svg, /12\.3k/);
});
