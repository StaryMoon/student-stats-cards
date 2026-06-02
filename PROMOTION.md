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
![Student Stats](https://your-deployment.vercel.app/api/student?name=Minghao%20Liu&school=Peking%20University&github=StaryMoon&papers=2&prs=4&anki=128&lang=zh-CN)
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

## Ethical Promotion Checklist

- Post to your own GitHub profile README.
- Add a clean demo screenshot to the repository.
- Share on Zhihu, Xiaohongshu, WeChat, Bilibili dynamic or Twitter/X with the demo URL.
- Submit to relevant lists only when the list explicitly accepts project submissions.
- Avoid posting unrelated issues asking for stars.
- When mentioning the base project, clearly credit `songquanpeng/stats-cards`.
