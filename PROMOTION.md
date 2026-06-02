# Promotion Kit

## One-liner

Student Stats Cards: 把刷题、科研、开源 PR、Anki 连续学习天数做成 GitHub 主页战绩卡。

## GitHub Repository Description

Student-friendly SVG cards for GitHub profile README: research, LeetCode, open-source PRs and study streaks.

## GitHub Topics

`github-profile`, `readme-stats`, `svg-card`, `student-tools`, `leetcode`, `anki`, `open-source`, `research-tools`, `resume`, `vercel`

## Zhihu / Blog Draft

我做了一个给学生党用的 GitHub 主页战绩卡项目：Student Stats Cards。

它的想法很简单：很多学生其实有不少零散积累，比如刷题、科研、开源 PR、Anki 连续学习天数、GitHub 星标，但这些东西分散在不同平台，很难在个人主页上形成一个直观印象。

所以我 fork 了 stats-cards，在原有 GitHub、LeetCode、知乎、B 站、牛客等卡片基础上，加了一个更适合学生主页的 `/api/student`，可以把这些指标压成一张干净的 SVG 卡片，直接放进 GitHub Profile README。

示例：

```md
![Student Stats](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128&lang=zh-CN)
```

这个项目适合几类人：

- 求职实习：展示 LeetCode、GitHub、开源 PR。
- 科研申请：展示论文、项目、引用、开源维护。
- 考试学习：展示 Anki/学习连续天数。
- 主页美化：把学生阶段的努力做成一张能看的卡。

项目地址：

https://github.com/StaryMoon/student-stats-cards

## Xiaohongshu / WeChat Short Post

给学生党做了个 GitHub 主页小组件。

可以把刷题数、论文/项目、合并 PR、Anki 连续学习天数、GitHub 星标做成一张 SVG 战绩卡，直接贴到 GitHub Profile README 里。

项目是开源的，fork 自 stats-cards，新增了学生战绩卡接口：

https://github.com/StaryMoon/student-stats-cards

## Reddit / English Short Post

I built a student-friendly fork of stats-cards for GitHub profile READMEs.

It adds a `/api/student` card that combines research outputs, LeetCode progress, merged PRs, GitHub stars and study streaks into one clean SVG card.

Repo: https://github.com/StaryMoon/student-stats-cards

## Hacker News / Show HN

Title:

```text
Show HN: Student Stats Cards – GitHub README cards for students
```

URL:

```text
https://github.com/StaryMoon/student-stats-cards
```

Optional first comment:

```text
I built a small student-focused fork of stats-cards. It adds a /api/student SVG card for GitHub profile READMEs, combining research outputs, LeetCode progress, merged PRs, GitHub stars and study streaks in one card.

The idea is that students often have scattered signals across platforms, but their profile README usually fails to show them cleanly. This is a lightweight way to make that visible.

Demo:
https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128
```

## Reddit r/SideProject

Title:

```text
I built an open-source GitHub README stats card for students
```

Body:

```text
I built a student-friendly fork of stats-cards for GitHub profile READMEs.

Most profile stat cards are developer-only: GitHub stars, commits, contribution streaks, etc. I wanted something a bit more useful for students, especially people applying for internships, grad school or research roles.

Student Stats Cards adds a /api/student SVG card that can show:

- GitHub stars and followers
- LeetCode progress
- papers / research projects
- merged open-source PRs
- Anki or study streaks

Example:
https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128

Repo:
https://github.com/StaryMoon/student-stats-cards

I’d love feedback on what student metrics are actually worth adding. I’m thinking about Google Scholar, Zotero, AnkiWeb and GitHub merged PR auto-detection next.
```

## Reddit r/github

Title:

```text
Student-friendly GitHub profile README cards
```

Body:

```text
I made a small open-source GitHub profile README card service for students.

It is forked from stats-cards and adds a /api/student endpoint that combines research outputs, LeetCode progress, merged PRs, GitHub stars and study streaks into one SVG card.

Repo:
https://github.com/StaryMoon/student-stats-cards

Demo:
https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128
```

## Dev.to / Hashnode Article

Title:

```text
I built Student Stats Cards: GitHub README cards for students
```

Body:

```markdown
Most GitHub profile stat cards are developer-first: stars, commits, streaks, languages.

That is useful, but students often have a different set of signals:

- research papers or projects
- LeetCode progress
- merged open-source PRs
- study streaks
- GitHub stars and followers

So I built **Student Stats Cards**, a student-friendly fork of `stats-cards`.

It adds a `/api/student` endpoint that generates a clean SVG card for GitHub profile READMEs.

```md
![Student Stats](https://student-stats-cards.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128)
```

Repo:
https://github.com/StaryMoon/student-stats-cards

Live demo:
https://student-stats-cards.vercel.app

I built this because a student profile is often more than code. For internships, research applications and open-source contribution, it helps to make scattered signals visible in one place.

Future ideas:

- Google Scholar citation cards
- Zotero publication cards
- AnkiWeb / study streak cards
- automatic merged PR counting
- better themes for student portfolios

Feedback and contributions are welcome.
```

## Product Hunt

Name:

```text
Student Stats Cards
```

Tagline:

```text
GitHub README stats cards for students
```

Description:

```text
Student Stats Cards is an open-source SVG card service for GitHub profile READMEs. It helps students show research outputs, LeetCode progress, merged PRs, GitHub stars and study streaks in one clean card.
```

Links:

```text
Website: https://student-stats-cards.vercel.app
GitHub: https://github.com/StaryMoon/student-stats-cards
```

Maker comment:

```text
I built Student Stats Cards because student profiles often have signals scattered across GitHub, LeetCode, research projects and study tools. This project turns those signals into a single SVG card that can be embedded in a GitHub profile README.

It is open-source and forked from stats-cards. I’d love feedback on what student metrics should be added next.
```

## OpenAlternative / Open Launch

Name:

```text
Student Stats Cards
```

Category:

```text
Developer Tools / Open Source / GitHub
```

Short description:

```text
Open-source SVG cards for student GitHub profile READMEs.
```

Long description:

```text
Student Stats Cards helps students display research outputs, LeetCode progress, merged open-source PRs, GitHub stars and study streaks in a clean SVG card for GitHub profile READMEs. It is forked from stats-cards and deployed on Vercel.
```

## Ethical Promotion Checklist

- Post to your own GitHub profile README.
- Add a clean demo screenshot to the repository.
- Share on Zhihu, Xiaohongshu, WeChat, Bilibili dynamic or Twitter/X with the demo URL.
- Submit to relevant lists only when the list explicitly accepts project submissions.
- Avoid posting unrelated issues asking for stars.
- When mentioning the base project, clearly credit `songquanpeng/stats-cards`.
