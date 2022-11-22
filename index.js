import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', home);
app.post('/info', info);
app.use(apiNotFound);

function apiNotFound(req, res) {
  res.status(400).send('API not found');
}

function home(req, res) {
  res.send('Hello!');
}

function info(req, res) {
  res.send('Info here');
}

app.listen(PORT, () => {
  console.log(`Express app listening at http://localhost:${PORT}`);
});
