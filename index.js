import express from 'express';
const app = express();

const port = 4000;
app.use('/', (req, res, next) => {
  res.send('Simple server on Vercel', req);
});
app.listen(port);

module.exports(app);

