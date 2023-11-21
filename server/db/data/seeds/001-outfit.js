import room1 from '../assets/img/room/room-1.png';
import room2 from '../assets/img/room/room-2.png';
import room3 from '../assets/img/room/room-3.png';
import cat1 from '../assets/img/cat/cat-1.png';
import cat2 from '../assets/img/cat/cat-2.png';
import cat3 from '../assets/img/cat/cat-3.png';
import item1 from '../assets/img/item/item-1.png';
import item2 from '../assets/img/item/item-2.png';
import item3 from '../assets/img/item/item-3.png';
import tops1 from '../assets/img/tops/tops-1.png';
import tops2 from '../../../../client/src/assets/img/tops/tops-2.png';
import tops3 from '../../../../client/src/assets/img/tops/tops-3.png';
import bottoms1 from '../../../../client/src/assets/img/bottoms/bottoms-1.png';
import bottoms2 from '../../../../client/src/assets/img/bottoms/bottoms-2.png';
import bottoms3 from '../../../../client/src/assets/img/bottoms/bottoms-3.png';

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
