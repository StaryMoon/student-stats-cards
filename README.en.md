<p align="right">
   <a href="./README.md">中文</a> | <strong>English</strong>
</p>

<div align="center">

# Student Stats Cards

_README SVG cards for students: coding, research, study streaks, and verifiable open-source impact._

</div>

`Student Stats Cards` is a student-friendly fork of [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards). It keeps the original platform cards and adds compact student and open-source impact cards for GitHub README pages.

<p align="center">
  <img src="https://student-stats-cards.vercel.app/api/contributor?username=StaryMoon&amp;scan=10&amp;limit=3&amp;theme=tokyonight" alt="StaryMoon open source contribution card" width="495">
</p>

## Quick Start

```md
![Student Stats](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128)
```

If you deploy your own instance, replace the domain with your Vercel URL.

## Profile README Gallery

Copy one of these snippets into your GitHub Profile README.

### Research Student

```md
![Research Student Card](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University%20%7C%20Image%20Restoration&github=StaryMoon&papers=3&projects=6&prs=6&anki=180)
```

### Job Hunting

```md
![Job Hunting Card](https://student-stats-cards.vercel.app/api/student?name=Your%20Name&school=CS%20Student%20%7C%20Backend%20Engineer&github=your_github&leetcode=your_leetcode&projects=5&prs=8&streak=120&theme=tokyonight)
```

### Open Source Contributor

```md
![Open Source Card](https://student-stats-cards.vercel.app/api/student?name=Open%20Source%20Student&school=Docs%20%2B%20Tools%20Contributor&github=your_github&prs=20&projects=4&stars=120&followers=30&theme=gruvbox)
```

### Study Streak

```md
![Study Streak Card](https://student-stats-cards.vercel.app/api/student?name=Daily%20Learner&school=Anki%20%2B%20LeetCode%20%2B%20Research&github=your_github&leetcode=your_leetcode&anki=365&streak=365&theme=light)
```

## Student Card API

Endpoint:

```text
/api/student
```

Useful query parameters:

| Parameter | Description |
| --- | --- |
| `name` | Display name |
| `school` | School, lab, major or short tagline |
| `github` | GitHub username; public stars and followers are fetched automatically |
| `leetcode` | LeetCode username; public solved problem count is fetched automatically |
| `stars` | Override GitHub stars |
| `solved` | Override solved problem count |
| `papers` / `projects` | Papers, projects or research outputs |
| `prs` / `pr` | Merged pull requests |
| `anki` / `streak` | Study streak |
| `followers` / `citations` | Followers, citations or impact metric |
| `theme` | Theme name, e.g. `light`, `dark`, `tokyonight`, `gruvbox` |
| `lang` | Use `zh-CN` for Chinese labels |
| `raw=true` | Return raw JSON |

## Open Source Impact Card

The contributor card automatically reads public pull requests merged outside the user's own repositories. It shows the total merged PR count, recently analyzed upstream repositories, their combined public stars, the highest-star upstream, and recent merges.

```md
![Open Source Impact](https://student-stats-cards.vercel.app/api/contributor?username=StaryMoon&scan=10&limit=3&theme=tokyonight)
```

| Parameter | Description |
| --- | --- |
| `username` | Required GitHub username |
| `scan` | Recent merged PRs analyzed for upstream metrics, `3-30`, default `10` |
| `limit` | Recent PR rows displayed, `1-5`, default `3` |
| `theme` | Theme such as `light`, `tokyonight`, or `gruvbox` |
| `lang` | Use `zh-CN` for Chinese labels |
| `raw=true` | Return auditable JSON with PR and repository links |

The total merged PR count comes from GitHub search. Upstream repository and star metrics cover only the recent `scan` sample, which keeps the API workload bounded and the displayed scope explicit.

Set `GITHUB_TOKEN` in production. The card performs repository metadata requests, and anonymous GitHub API limits are easy to exhaust on a shared deployment.

## Local Development

```shell
git clone https://github.com/StaryMoon/student-stats-cards.git
cd student-stats-cards
npm install
npm test
npm start
```

Open:

```text
http://localhost:3000/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128
```

Open-source impact card:

```text
http://localhost:3000/api/contributor?username=StaryMoon&scan=10&limit=3&theme=tokyonight
```

## Credits

Forked from [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards). Licensed under MIT.
