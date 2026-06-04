<p align="right">
   <a href="./README.md">中文</a> | <strong>English</strong>
</p>

<div align="center">

# Student Stats Cards

_README SVG cards for students: coding, research, open-source PRs and study streaks._

</div>

`Student Stats Cards` is a student-friendly fork of [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards). It keeps the original platform cards and adds `/api/student`, a compact profile card for GitHub README pages.

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

## Local Development

```shell
git clone https://github.com/StaryMoon/student-stats-cards.git
cd student-stats-cards
npm install
npm start
```

Open:

```text
http://localhost:3000/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128
```

## Credits

Forked from [songquanpeng/stats-cards](https://github.com/songquanpeng/stats-cards). Licensed under MIT.
