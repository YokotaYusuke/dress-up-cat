const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const knex = require('../db/index');
// const { setupServer } = require('./server');
// const server = setupServer();
const expect = chai.expect;
const OUTFIT_TABLE = 'outfit';

const outfitArr = [
  {
    create_date: new Date(),
    outfit_name: 'にゃんこ1',
    room_url: '../img/room/room-1.png',
    cat_url: '../img/cat/cat-1.png',
    item_url: '../img/item/item-1.png',
    tops_url: '../img/tops/tops-1.png',
    bottoms_url: '../img/bottoms/bottoms-1.png',
  },
  {
    create_date: new Date(),
    outfit_name: 'にゃんこ2',
    room_url: '../img/room/room-2.png',
    cat_url: '../img/cat/cat-2.png',
    item_url: '../img/item/item-2.png',
    tops_url: '../img/tops/tops-2.png',
    bottoms_url: '../img/bottoms/bottoms-2.png',
  },
  {
    create_date: new Date(),
    outfit_name: 'にゃんこ3',
    room_url: '../img/room/room-3.png',
    cat_url: '../img/cat/cat-3.png',
    item_url: '../img/item/item-3.png',
    tops_url: '../img/tops/tops-3.png',
    bottoms_url: '../img/bottoms/bottoms-3.png',
  },
];

describe('outfit', () => {
  describe('GET', () => {
    it('outfitの配列を返せているか？', async () => {
      const allOutfit = await knex.select().from(OUTFIT_TABLE);
      expect(allOutfit).to.be.an.instanceof(Array);
    });
  });

  describe('POST', () => {
    it('outfitに新しいデータを保存できているか？', async () => {
      const addItem = {
        create_date: null,
        outfit_name: 'にゃんこ4',
        room_url: '../img/room/room-4.png',
        cat_url: '../img/cat/cat-4.png',
        item_url: '../img/item/item-4.png',
        tops_url: '../img/tops/tops-4.png',
        bottoms_url: '../img/bottoms/bottoms-4.png',
      };
      await knex.insert(addItem).into(OUTFIT_TABLE);
      const outfitList = await knex.select().from(OUTFIT_TABLE);
      const outfitItem = outfitList.slice(-1)[0];
      expect(outfitItem.outfit_name).to.be.equal(addItem.outfit_name);
    });
  });
});
