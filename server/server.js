const express = require('express');
const app = express();
const PORT = 8080;
app.use('/', express.static('public'));
app.use(express.json());

// CORSエラーを解消する
const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:5173', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

const dataObj = [];

app.get('/api', (req, res) => {
  console.log('サーバー接続OK');
  res.end();
});

app.post('/album', (req, res) => {
  console.log('req.body===>', req.body);
  req.body['id'] = dataObj.length;
  console.log('サーバー側', dataObj);
  dataObj.push(req.body);
  res.send(dataObj);
});

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
  console.log('http://localhost:8080');
});
