// 画像のurl取得出来ないので、一旦諦める
const path = require('path');
// console.log(__dirname);
const room1 = path.resolve(__dirname, '../img/room/room-1.png');
const room2 = path.resolve(__dirname, '../img/room/room-2.png');
const room3 = path.resolve(__dirname, '../img/room/room-3.png');
const cat1 = path.resolve(__dirname, '../img/cat/cat-1.png');
const cat2 = path.resolve(__dirname, '../img/cat/cat-2.png');
const cat3 = path.resolve(__dirname, '../img/cat/cat-3.png');
const item1 = path.resolve(__dirname, '../img/item/item-1.png');
const item2 = path.resolve(__dirname, '../img/item/item-2.png');
const item3 = path.resolve(__dirname, '../img/item/item-3.png');
const tops1 = path.resolve(__dirname, '../img/tops/tops-1.png');
const tops2 = path.resolve(__dirname, '../img/tops/tops-2.png');
const tops3 = path.resolve(__dirname, '../img/tops/tops-3.png');
const bottoms1 = path.resolve(__dirname, '../img/bottoms/bottoms-1.png');
const bottoms2 = path.resolve(__dirname, '../img/bottoms/bottoms-2.png');
const bottoms3 = path.resolve(__dirname, '../img/bottoms/bottoms-3.png');
// const room1 = path.resolve(__dirname, '../../../../../client/src/assets/img/room/room-1.png');
// const room2 = path.resolve(__dirname, '../../../../../client/src/assets/img/room/room-2.png');
// const room3 = path.resolve(__dirname, '../../../../../client/src/assets/img/room/room-3.png');
// const cat1 = path.resolve(__dirname, '../../../../../client/src/assets/img/cat/cat-1.png');
// const cat2 = path.resolve(__dirname, '../../../../../client/src/assets/img/cat/cat-2.png');
// const cat3 = path.resolve(__dirname, '../../../../../client/src/assets/img/cat/cat-3.png');
// const item1 = path.resolve(__dirname, '../../../../../client/src/assets/img/item/item-1.png');
// const item2 = path.resolve(__dirname, '../../../../../client/src/assets/img/item/item-2.png');
// const item3 = path.resolve(__dirname, '../../../../../client/src/assets/img/item/item-3.png');
// const tops1 = path.resolve(__dirname, '../../../../../client/src/assets/img/tops/tops-1.png');
// const tops2 = path.resolve(__dirname, '../../../../../client/src/assets/img/tops/tops-2.png');
// const tops3 = path.resolve(__dirname, '../../../../../client/src/assets/img/tops/tops-3.png');
// const bottoms1 = path.resolve(__dirname, '../../../../../client/src/assets/img/bottoms/bottoms-1.png');
// const bottoms2 = path.resolve(__dirname, '../../../../../client/src/assets/img/bottoms/bottoms-2.png');
// const bottoms3 = path.resolve(__dirname, '../../../../../client/src/assets/img/bottoms/bottoms-3.png');

// exports.seed = async function (knex) {
//   // Deletes ALL existing entries
//   await knex('outfit').del();
//   await knex('outfit').insert([
//     {
//       create_date: new Date(),
//       outfit_name: 'にゃんこ1',
//       room_url: '../img/room/room-1.png',
//       cat_url: '../img/cat/cat-1.png',
//       item_url: '../img/item/item-1.png',
//       tops_url: '../img/tops/tops-1.png',
//       bottoms_url: '../img/bottoms/bottoms-1.png',
//     },
//     {
//       create_date: new Date(),
//       outfit_name: 'にゃんこ2',
//       room_url: '../img/room/room-2.png',
//       cat_url: '../img/cat/cat-2.png',
//       item_url: '../img/item/item-2.png',
//       tops_url: '../img/tops/tops-2.png',
//       bottoms_url: '../img/bottoms/bottoms-2.png',
//     },
//     {
//       create_date: new Date(),
//       outfit_name: 'にゃんこ3',
//       room_url: '../img/room/room-3.png',
//       cat_url: '../img/cat/cat-3.png',
//       item_url: '../img/item/item-3.png',
//       tops_url: '../img/tops/tops-3.png',
//       bottoms_url: '../img/bottoms/bottoms-3.png',
//     },
//   ]);
// };
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('outfit').del();
  await knex('outfit').insert([
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ1',
      room_url: room1,
      cat_url: cat1,
      item_url: item1,
      tops_url: tops1,
      bottoms_url: bottoms1,
    },
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ2',
      room_url: room2,
      cat_url: cat2,
      item_url: item2,
      tops_url: tops2,
      bottoms_url: bottoms2,
    },
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ3',
      room_url: room3,
      cat_url: cat3,
      item_url: item3,
      tops_url: tops3,
      bottoms_url: bottoms3,
    },
  ]);
};
