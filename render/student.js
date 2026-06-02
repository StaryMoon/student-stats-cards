const { constructItem, render } = require('./common');
const { encodeHTML } = require('../common/utils');

function truncate(text, maxLength) {
  const value = String(text || '');
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1)}…`;
}

function centeredItem(x, y, text, type, fontSize, color = '') {
  const item = constructItem(x, y, text, type, fontSize, color);
  item.center = true;
  return item;
}

function renderStudentCard(data, lang) {
  const {
    name,
    school,
    tagline,
    stars,
    solved,
    papers,
    prs,
    anki,
    followers,
    theme,
  } = data;

  const title =
    lang === 'zh-CN'
      ? `${truncate(name, 20)} 的学生战绩卡`
      : `${truncate(name, 20)}'s Student Stats`;
  const subtitle = truncate(school || tagline, 44);

  const labels =
    lang === 'zh-CN'
      ? ['开源星标', '刷题数', '论文/项目', '合并 PR', '连续学习', '粉丝/引用']
      : ['Stars', 'Problems', 'Papers', 'Merged PRs', 'Streak', 'Followers'];

  const values = [stars, solved, papers, prs, anki, followers].map((value) =>
    encodeHTML(String(value))
  );

  const xs = [64, 185, 306];
  const items = [
    constructItem(0, 34, encodeHTML(title), 'title', 18),
    centeredItem(191, 60, encodeHTML(subtitle), 'label', 12),
  ];

  for (let i = 0; i < 3; i++) {
    items.push(centeredItem(xs[i], 97, labels[i], 'label', 12));
    items.push(centeredItem(xs[i], 124, values[i], 'value', 24));
  }

  for (let i = 0; i < 3; i++) {
    items.push(centeredItem(xs[i], 154, labels[i + 3], 'label', 12));
    items.push(centeredItem(xs[i], 181, values[i + 3], 'value', 22));
  }

  return render(items, theme);
}

module.exports = renderStudentCard;
