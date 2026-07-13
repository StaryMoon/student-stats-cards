const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
const app = express();
const zhihu = require('./routes/zhihu');
const bilibili = require('./routes/bilibili');
const leetcode = require('./routes/leetcode');
const juejin = require('./routes/juejin');
const csdn = require('./routes/csdn');
const nowcoder = require('./routes/nowcoder');
const github = require('./routes/github');
const student = require('./routes/student');
const contributor = require('./routes/contributor');
const mycard = require('./routes/mycard');
const steam = require('./routes/steam');
const codeforces = require('./routes/codeforces');
const website = require('./routes/website');
const path = require('path');
const { cacheTime } = require('./common/cache');

app.use('/api/zhihu', zhihu);
app.use('/api/bilibili', bilibili);
app.use('/api/leetcode', leetcode);
app.use('/api/juejin', juejin);
app.use('/api/csdn', csdn);
app.use('/api/nowcoder', nowcoder);
app.use('/api/github', github);
app.use('/api/student', student);
app.use('/api/contributor', contributor);
app.use('/api/website', website);
app.use('/api/mycard', mycard);
app.use('/api/steam', steam);
app.use('/api/codeforces', codeforces);

app.use(
  serveStatic(path.join(__dirname, 'public'), {
    maxAge: cacheTime * 1000,
  })
);

if (require.main === module) {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 3000);
}

module.exports = app;
