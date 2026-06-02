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
