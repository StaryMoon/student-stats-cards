const test = require('node:test');
const assert = require('node:assert/strict');
const { clampScan, repositoryNameFromUrl, summarizeContributions } =
  require('../crawler/github-contributions').internal;

test('clampScan keeps GitHub API work bounded', () => {
  assert.equal(clampScan(undefined), 10);
  assert.equal(clampScan(1), 3);
  assert.equal(clampScan(12), 12);
  assert.equal(clampScan(100), 30);
});

test('repositoryNameFromUrl extracts an owner and repository', () => {
  assert.equal(
    repositoryNameFromUrl('https://api.github.com/repos/freqtrade/freqtrade'),
    'freqtrade/freqtrade'
  );
  assert.equal(repositoryNameFromUrl('invalid'), '');
});

test('summarizeContributions reports transparent impact metrics', () => {
  const searchResult = {
    total_count: 8,
    items: [
      {
        title: 'Improve docs',
        html_url: 'https://github.com/example/large/pull/1',
        repository_url: 'https://api.github.com/repos/example/large',
        pull_request: { merged_at: '2026-07-01T00:00:00Z' },
      },
      {
        title: 'Add tests',
        html_url: 'https://github.com/example/small/pull/2',
        repository_url: 'https://api.github.com/repos/example/small',
        pull_request: { merged_at: '2026-07-02T00:00:00Z' },
      },
    ],
  };
  const repositories = [
    {
      full_name: 'example/large',
      stargazers_count: 12000,
      html_url: 'https://github.com/example/large',
    },
    {
      full_name: 'example/small',
      stargazers_count: 200,
      html_url: 'https://github.com/example/small',
    },
  ];

  const result = summarizeContributions(searchResult, repositories);

  assert.equal(result.mergedPullRequests, 8);
  assert.equal(result.analyzedPullRequests, 2);
  assert.equal(result.upstreamRepositories, 2);
  assert.equal(result.repositoriesWithStarData, 2);
  assert.equal(result.upstreamDataComplete, true);
  assert.equal(result.upstreamStars, 12200);
  assert.equal(result.topRepository.name, 'example/large');
  assert.equal(result.recentPullRequests[1].repository, 'example/small');
});

test('summarizeContributions preserves repository names with partial metadata', () => {
  const result = summarizeContributions(
    {
      total_count: 1,
      items: [
        {
          title: 'Fix an edge case',
          html_url: 'https://github.com/example/repo/pull/3',
          repository_url: 'https://api.github.com/repos/example/repo',
          pull_request: { merged_at: '2026-07-03T00:00:00Z' },
        },
      ],
    },
    []
  );

  assert.equal(result.upstreamRepositories, 1);
  assert.equal(result.repositoriesWithStarData, 0);
  assert.equal(result.upstreamDataComplete, false);
  assert.equal(result.recentPullRequests[0].repository, 'example/repo');
});
