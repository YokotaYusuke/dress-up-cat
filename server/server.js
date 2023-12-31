const express = require('express');
const app = express();

const setupServer = () => {
  // app.use('/', express.static(__dirname + '/public'));
  app.use('/', express.static('../client/dist'));
  // imgがExpress側で静的ファイルとして認識できてないのが問題。
  // imgをExpress
  app.use('/', express.static('../client/img'));

  app.use(express.json());
  const knex = require('./db/index.js');
  const OUTFIT_TABLE = 'outfit';
  // CORSエラーを解消する
  const cors = require('cors');
  app.use(
    cors({
      origin: 'http://localhost:5173', //アクセス許可するオリジン
      credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
      optionsSuccessStatus: 200, //レスポンスstatusを200に設定
    })
  );

  app.get('/allData', async (req, res) => {
    const outfitList = await knex.select().from(OUTFIT_TABLE);
    res.send(outfitList);
  });

  app.get('/allData/:id', async (req, res) => {
    const id = req.params.id;
    const outfitItem = await knex.select().from(OUTFIT_TABLE).where({ id: id }).first();
    res.send(outfitItem);
  });

  app.post('/album', async (req, res) => {
    await knex.insert(req.body).into(OUTFIT_TABLE);
    const outfitList = await knex.select().from(OUTFIT_TABLE);
    res.send(outfitList);
  });
  return app;
};

module.exports = { setupServer };
