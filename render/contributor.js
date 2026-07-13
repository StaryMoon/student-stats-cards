const getTheme = require('../common/theme');
const { encodeHTML } = require('../common/utils');

function truncate(text, maxLength) {
  const value = String(text || '');
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1)}…`;
}

function formatNumber(value) {
  const number = Number(value) || 0;
  if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M`;
  if (number >= 1000) return `${(number / 1000).toFixed(1)}k`;
  return String(number);
}

function renderContributorCard(data, lang = 'en') {
  const { titleColor, backgroundColor, labelColor, valueColor } = getTheme(
    data.theme
  );
  const chinese = lang === 'zh-CN';
  const title = chinese
    ? `${truncate(data.username, 24)} 的开源贡献`
    : `${truncate(data.username, 24)}'s Open Source Impact`;
  const labels = chinese
    ? ['已合并 PR', '近期上游', '上游星标']
    : ['Merged PRs', 'Recent upstreams', 'Upstream stars'];
  const topLabel = chinese ? '贡献过的最高星项目' : 'Highest-star upstream';
  const recentLabel = chinese ? '最近合并' : 'Recently merged';
  const recent = data.recentPullRequests.slice(0, data.limit || 3);
  const upstreamStars = data.upstreamDataComplete
    ? formatNumber(data.upstreamStars)
    : `≥${formatNumber(data.upstreamStars)}`;

  const rows = recent
    .map((pullRequest, index) => {
      const y = 183 + index * 22;
      const repository = encodeHTML(truncate(pullRequest.repository, 28));
      const titleText = encodeHTML(truncate(pullRequest.title, 34));
      return `<text x="28" y="${y}" fill="${labelColor}" font-size="11">${repository}</text>
      <text x="467" y="${y}" text-anchor="end" fill="${valueColor}" font-size="11">${titleText}</text>`;
    })
    .join('\n');

  const height = Math.max(235, 205 + recent.length * 22);
  const topRepository = data.topRepository
    ? `${truncate(data.topRepository.name, 36)} · ${formatNumber(
        data.topRepository.stars
      )} stars`
    : chinese
    ? '暂无公开合并记录'
    : 'No public merged pull requests yet';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="495" height="${height}" viewBox="0 0 495 ${height}" role="img" aria-label="${encodeHTML(
    title
  )}">
  <style>
    text { font-family: Segoe UI, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, sans-serif; }
  </style>
  <rect x="1" y="1" width="493" height="${
    height - 2
  }" rx="8" fill="${backgroundColor}" stroke="${labelColor}" stroke-opacity="0.18"/>
  <text x="24" y="34" fill="${titleColor}" font-size="18" font-weight="700">${encodeHTML(
    title
  )}</text>
  <text x="24" y="56" fill="${labelColor}" font-size="11">${encodeHTML(
    chinese
      ? `基于最近 ${data.analyzedPullRequests} 条外部合并记录`
      : `Based on ${data.analyzedPullRequests} recent external merges`
  )}</text>

  <text x="82" y="88" text-anchor="middle" fill="${labelColor}" font-size="11">${
    labels[0]
  }</text>
  <text x="247" y="88" text-anchor="middle" fill="${labelColor}" font-size="11">${
    labels[1]
  }</text>
  <text x="412" y="88" text-anchor="middle" fill="${labelColor}" font-size="11">${
    labels[2]
  }</text>
  <text x="82" y="116" text-anchor="middle" fill="${valueColor}" font-size="24" font-weight="700">${formatNumber(
    data.mergedPullRequests
  )}</text>
  <text x="247" y="116" text-anchor="middle" fill="${valueColor}" font-size="24" font-weight="700">${formatNumber(
    data.upstreamRepositories
  )}</text>
  <text x="412" y="116" text-anchor="middle" fill="${valueColor}" font-size="24" font-weight="700">${upstreamStars}</text>

  <line x1="24" x2="471" y1="132" y2="132" stroke="${labelColor}" stroke-opacity="0.16"/>
  <text x="24" y="153" fill="${labelColor}" font-size="11">${topLabel}</text>
  <text x="471" y="153" text-anchor="end" fill="${valueColor}" font-size="12" font-weight="600">${encodeHTML(
    topRepository
  )}</text>
  <text x="24" y="176" fill="${titleColor}" font-size="11" font-weight="600">${recentLabel}</text>
  ${rows}
  <text x="471" y="${
    height - 14
  }" text-anchor="end" fill="${labelColor}" font-size="9">student-stats-cards</text>
</svg>`;
}

module.exports = renderContributorCard;
module.exports.internal = { formatNumber, truncate };
