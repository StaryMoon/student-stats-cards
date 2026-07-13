const axios = require('axios');

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'student-stats-cards',
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  },
});

function clampScan(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 10;
  return Math.min(30, Math.max(3, Math.trunc(parsed)));
}

function repositoryNameFromUrl(repositoryUrl) {
  const match = String(repositoryUrl || '').match(/\/repos\/([^/]+\/[^/]+)$/);
  return match ? match[1] : '';
}

function summarizeContributions(searchResult, repositoryData) {
  const items = Array.isArray(searchResult.items) ? searchResult.items : [];
  const repositoryNames = [
    ...new Set(
      items
        .map((item) => repositoryNameFromUrl(item.repository_url))
        .filter(Boolean)
    ),
  ];
  const repositories = new Map(
    repositoryData.map((repository) => [repository.full_name, repository])
  );

  const recentPullRequests = items.map((item) => {
    const repositoryName = repositoryNameFromUrl(item.repository_url);
    const repository = repositories.get(repositoryName);
    return {
      title: item.title,
      url: item.html_url,
      mergedAt: item.pull_request && item.pull_request.merged_at,
      repository: repository ? repository.full_name : repositoryName,
      repositoryStars: repository ? repository.stargazers_count : 0,
    };
  });

  const topRepository = repositoryData.reduce((top, repository) => {
    if (!top || repository.stargazers_count > top.stargazers_count) {
      return repository;
    }
    return top;
  }, null);

  return {
    mergedPullRequests: Number(searchResult.total_count) || 0,
    analyzedPullRequests: items.length,
    upstreamRepositories: repositoryNames.length,
    repositoriesWithStarData: repositoryData.length,
    upstreamDataComplete: repositoryData.length === repositoryNames.length,
    upstreamStars: repositoryData.reduce(
      (total, repository) => total + repository.stargazers_count,
      0
    ),
    topRepository: topRepository
      ? {
          name: topRepository.full_name,
          stars: topRepository.stargazers_count,
          url: topRepository.html_url,
        }
      : null,
    recentPullRequests,
  };
}

async function getGitHubContributions(username, options = {}) {
  const scan = clampScan(options.scan);
  const query = `author:${username} type:pr is:merged -user:${username}`;
  const searchResponse = await githubApi.get('/search/issues', {
    params: {
      q: query,
      per_page: scan,
      sort: 'updated',
      order: 'desc',
    },
  });

  const repositoryNames = [
    ...new Set(
      searchResponse.data.items
        .map((item) => repositoryNameFromUrl(item.repository_url))
        .filter(Boolean)
    ),
  ];

  const repositoryResponses = await Promise.allSettled(
    repositoryNames.map((name) => githubApi.get(`/repos/${name}`))
  );
  const repositoryData = repositoryResponses
    .filter((result) => result.status === 'fulfilled')
    .map((result) => result.value.data);

  if (repositoryNames.length > 0 && repositoryData.length === 0) {
    const failedRequest = repositoryResponses.find(
      (result) => result.status === 'rejected'
    );
    throw failedRequest.reason;
  }

  return summarizeContributions(searchResponse.data, repositoryData);
}

module.exports = getGitHubContributions;
module.exports.internal = {
  clampScan,
  repositoryNameFromUrl,
  summarizeContributions,
};
