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

const obj = {
  id: 1,
  name: 'yusuke',
  age: 26,
};

app.get('/api', (req, res) => {
  console.log('サーバー来てる？？');
  res.send(obj);
});

app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
  console.log('http://localhost:8080');
});
