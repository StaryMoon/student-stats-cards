<p align="right">
   <strong>中文</strong> | <a href="./README.en.md">English</a>
</p>

<div align="center">

# Student Stats Cards

_把刷题、科研、学习连续天数和真实开源影响力做成 GitHub 主页战绩卡。_

</div>

<p align="center">
  <a href="https://github.com/StaryMoon/student-stats-cards/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/StaryMoon/student-stats-cards?color=brightgreen" alt="license">
  </a>
  <a href="https://github.com/StaryMoon/student-stats-cards">
    <img src="https://img.shields.io/github/stars/StaryMoon/student-stats-cards?style=social" alt="stars">
  </a>
  <a href="https://github.com/songquanpeng/stats-cards">
    <img src="https://img.shields.io/badge/forked%20from-stats--cards-blue" alt="forked from stats-cards">
  </a>
</p>

<p align="center">
  <a href="#快速使用">快速使用</a>
  ·
  <a href="#profile-readme-gallery">Profile README Gallery</a>
  ·
  <a href="#学生战绩卡">学生战绩卡</a>
  ·
  <a href="#开源贡献卡">开源贡献卡</a>
  ·
  <a href="#已有平台卡片">已有平台卡片</a>
  ·
  <a href="#部署">部署</a>
</p>

<p align="center">
  <img src="https://student-stats-cards.vercel.app/api/contributor?username=StaryMoon&amp;scan=10&amp;limit=3&amp;lang=zh-CN&amp;theme=tokyonight" alt="StaryMoon open source contribution card" width="495">
</p>

<p align="center">
  <img src="assets/screenshots/github-education.png" alt="GitHub Education public page screenshot" width="880">
</p>

<sub>图片来源：GitHub Education 公开页面截图，[https://education.github.com/](https://education.github.com/)。截图用于说明学生开发者展示场景，不代表 GitHub 官方背书。</sub>

## 这个项目是什么

`Student Stats Cards` 是一个面向学生党的 README SVG 卡片服务，fork 自 [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards)，保留原项目的 GitHub、知乎、B 站、LeetCode、牛客、CSDN 等平台卡片，并新增两个适合学生 GitHub 主页的接口：

- 科研党可以晒论文、引用、开源 PR。
- 求职党可以晒 LeetCode、牛客、GitHub 星标。
- 考试党可以晒 Anki/学习连续天数。
- 主页党可以把一堆零散战绩压成一张干净卡片。
- 开源贡献者可以自动展示外部 merged PR、近期上游项目及其公开星标规模。

## 快速使用

把下面这段放进你的 GitHub Profile README：

```md
![Student Stats](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128&lang=zh-CN)
```

如果你自己部署了服务，把域名替换成你的 Vercel 域名即可：

```md
![Student Stats](https://你的域名/api/student?name=Your%20Name&school=Your%20University&github=your_github&leetcode=your_leetcode&papers=1&prs=3&anki=100)
```

## Profile README Gallery

下面这些模板可以直接复制进 GitHub Profile README。

### 科研型主页

```md
![Research Student Card](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University%20%7C%20Image%20Restoration&github=StaryMoon&papers=3&projects=6&prs=6&anki=180&lang=zh-CN)
```

适合：论文、项目页、实验代码、开源 PR 都想放在一张卡里的学生。

### 求职型主页

```md
![Job Hunting Card](https://student-stats-cards.vercel.app/api/student?name=Your%20Name&school=CS%20Student%20%7C%20Backend%20Engineer&github=your_github&leetcode=your_leetcode&projects=5&prs=8&streak=120&theme=tokyonight)
```

适合：想把刷题、项目、GitHub 活跃度一起展示给面试官的人。

### 开源贡献型主页

```md
![Open Source Card](https://student-stats-cards.vercel.app/api/student?name=Open%20Source%20Student&school=Docs%20%2B%20Tools%20Contributor&github=your_github&prs=20&projects=4&stars=120&followers=30&theme=gruvbox)
```

适合：经常给上游项目修文档、修链接、补测试、发小工具的人。

### 学习连续型主页

```md
![Study Streak Card](https://student-stats-cards.vercel.app/api/student?name=Daily%20Learner&school=Anki%20%2B%20LeetCode%20%2B%20Research&github=your_github&leetcode=your_leetcode&anki=365&streak=365&theme=light)
```

适合：想展示长期主义、学习连续天数、刷题习惯的人。

## 学生战绩卡

接口：

```text
/api/student
```

常用参数：

| 参数 | 说明 |
| --- | --- |
| `name` | 展示名 |
| `school` | 学校、实验室、专业或一句简介 |
| `github` | GitHub 用户名，会自动读取公开星标、粉丝等数据 |
| `leetcode` | LeetCode 用户名，会自动读取公开刷题数据 |
| `stars` | 手动覆盖 GitHub 星标数 |
| `solved` | 手动覆盖刷题数 |
| `papers` / `projects` | 论文数、项目数或科研成果数 |
| `prs` / `pr` | 合并 PR 数 |
| `anki` / `streak` | Anki 或学习连续天数 |
| `followers` / `citations` | 粉丝、引用或影响力指标 |
| `theme` | 主题，如 `light`、`dark`、`tokyonight`、`gruvbox` |
| `lang` | `zh-CN` 显示中文 |
| `raw=true` | 返回 JSON 原始数据 |

示例：

```md
![Minghao Liu](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128&lang=zh-CN)
```

```md
![Dark Student Card](https://student-stats-cards.vercel.app/api/student?name=StaryMoon&school=PKU%20Research%20Student&github=StaryMoon&leetcode=your_leetcode&papers=2&prs=4&anki=128&theme=tokyonight)
```

## 开源贡献卡

这个接口不需要手填 PR 数。它会从 GitHub 公开数据中读取该用户在自己仓库以外已合并的 Pull Request，并展示：

- 全部公开 merged PR 数；
- 最近扫描记录涉及的上游仓库数；
- 这些近期上游仓库的公开星标总数；
- 最高星上游与最近合并记录。

直接放进 Profile README：

```md
![Open Source Impact](https://student-stats-cards.vercel.app/api/contributor?username=StaryMoon&scan=10&limit=3&theme=tokyonight)
```

中文版本：

```md
![开源贡献](https://student-stats-cards.vercel.app/api/contributor?username=StaryMoon&scan=10&limit=3&lang=zh-CN&theme=tokyonight)
```

接口参数：

| 参数 | 说明 |
| --- | --- |
| `username` | GitHub 用户名，必填 |
| `scan` | 用于计算近期上游影响力的 PR 数，范围 `3-30`，默认 `10` |
| `limit` | 卡片中展示的最近 PR 数，范围 `1-5`，默认 `3` |
| `theme` | 主题，如 `light`、`tokyonight`、`gruvbox` |
| `lang` | `zh-CN` 显示中文 |
| `raw=true` | 返回可核验的 JSON，包含 PR 与上游链接 |

> “已合并 PR”来自 GitHub 搜索总数；“近期上游”和“上游星标”只基于 `scan` 指定的最近记录，卡片会明确显示样本数。这样既控制 API 请求，也避免夸大统计口径。

## 已有平台卡片

本项目保留原 `stats-cards` 的常用接口：

- GitHub：`/api/github?username=StaryMoon`
- 知乎：`/api/zhihu?username=excited-vczh`
- B 站：`/api/bilibili?id=666`
- LeetCode：`/api/leetcode?username=quanpeng`
- LeetCode 中文站：`/api/leetcode?username=quanpeng&cn=true`
- 牛客：`/api/nowcoder?id=6484283`
- CSDN：`/api/csdn?id=vczh`
- Codeforces：`/api/codeforces?username=tourist`
- 网站监控：`/api/website?url=https://github.com/&style=flat&logo=github`

## 部署

### Vercel

1. Fork 本项目。
2. 在 [Vercel](https://vercel.com/new) 导入 GitHub 仓库。
3. 设置环境变量 `GITHUB_TOKEN`。贡献卡需要读取仓库元数据，生产部署强烈建议配置 token。

### 本地运行

```shell
git clone https://github.com/StaryMoon/student-stats-cards.git
cd student-stats-cards
npm install
npm test
npm start
```

打开：

```text
http://localhost:3000/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128&lang=zh-CN
```

开源贡献卡：

```text
http://localhost:3000/api/contributor?username=StaryMoon&scan=10&limit=3&lang=zh-CN&theme=tokyonight
```

## 环境变量

| 环境变量 | 说明 |
| --- | --- |
| `GITHUB_TOKEN` | GitHub API token；部署贡献卡时强烈建议配置，避免匿名限额 |
| `CACHE_TIME` | 缓存时间，单位秒，默认 `6000` |
| `MAX_CACHE_ITEMS` | 最大缓存数量，默认 `1024` |
| `PORT` | 服务端口，默认 `3000` |

## 致谢

本项目 fork 自 [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards)，遵循 MIT 协议。新增的学生战绩卡功能由 [Minghao Liu / StaryMoon](https://github.com/StaryMoon) 维护。
