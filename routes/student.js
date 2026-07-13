const getGitHubInfo = require('../crawler/github');
const getLeetCodeInfo = require('../crawler/leetcode');
const renderStudentCard = require('../render/student');
const { cache, cacheTime } = require('../common/cache');
const { processData } = require('../common/utils');

function parseNumber(value, fallback = 0) {
  if (value === undefined || value === null || value === '') return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

async function getCached(prefix, id, getter) {
  if (!id) return null;
  const key = `${prefix}:${id}`;
  let data = cache.get(key);
  if (!data) {
    data = await getter(id);
    cache.set(key, data);
  }
  return data;
}

module.exports = async (req, res) => {
  const {
    name,
    school,
    github,
    leetcode,
    papers,
    projects,
    prs,
    pr,
    anki,
    streak,
    followers,
    citations,
    stars,
    solved,
    tagline,
    theme,
    lang,
    raw,
  } = req.query;

  const [githubInfo, leetcodeInfo] = await Promise.all([
    getCached('student-github', github, getGitHubInfo),
    getCached('student-leetcode', leetcode, getLeetCodeInfo),
  ]);

  const displayName =
    name ||
    (githubInfo && githubInfo.name) ||
    github ||
    (leetcodeInfo && leetcodeInfo.name) ||
    'Student';

  const data = {
    name: displayName,
    school: school || '',
    tagline: tagline || 'Research · Code · Exams · Open Source',
    stars: parseNumber(stars, githubInfo ? githubInfo.stars : 0),
    solved: parseNumber(solved, leetcodeInfo ? leetcodeInfo.total_solved : 0),
    papers: parseNumber(papers, parseNumber(projects, 0)),
    prs: parseNumber(prs, parseNumber(pr, 0)),
    anki: parseNumber(anki, parseNumber(streak, 0)),
    followers: parseNumber(
      followers,
      parseNumber(citations, githubInfo ? githubInfo.followers : 0)
    ),
    github,
    leetcode,
    theme,
  };

  if (raw === 'true') {
    return res.json(data);
  }

  processData(data);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderStudentCard(data, lang));
};
