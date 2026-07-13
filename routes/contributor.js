const getGitHubContributions = require('../crawler/github-contributions');
const renderContributorCard = require('../render/contributor');
const { cache, cacheTime } = require('../common/cache');

const usernamePattern = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

function parseLimit(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 3;
  return Math.min(5, Math.max(1, Math.trunc(parsed)));
}

module.exports = async (req, res) => {
  const { username, theme, lang, raw } = req.query;
  const scan = getGitHubContributions.internal.clampScan(req.query.scan);
  const limit = parseLimit(req.query.limit);

  if (!username || !usernamePattern.test(username)) {
    return res.status(400).json({
      error: 'A valid GitHub username is required.',
    });
  }

  const cacheKey = `contributor:${username.toLowerCase()}:${scan}`;

  try {
    let data = cache.get(cacheKey);
    if (!data) {
      data = await getGitHubContributions(username, { scan });
      cache.set(cacheKey, data);
    }

    const responseData = { ...data, username, theme, limit };
    if (raw === 'true') return res.json(responseData);

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
    return res.send(renderContributorCard(responseData, lang));
  } catch (error) {
    const status = error.response && error.response.status;
    return res.status(status === 404 ? 404 : 502).json({
      error:
        status === 403
          ? 'GitHub API rate limit reached. Configure GITHUB_TOKEN.'
          : 'Unable to load GitHub contribution data.',
    });
  }
};

module.exports.internal = { parseLimit, usernamePattern };
