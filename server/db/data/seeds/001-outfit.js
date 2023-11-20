exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('outfit').del();
  await knex('outfit').insert([
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ1',
      room_url: '../img/bottoms/bottoms-1.png',
      cat_url: '../img/cat/cat-1.png',
      item_url: '../img/item/item-1.png',
      tops_url: '../img/tops/tops-1.png',
      bottoms_url: '../img/bottoms/bottoms-1.png',
    },
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ2',
      room_url: '../img/bottoms/bottoms-2.png',
      cat_url: '../img/cat/cat-2.png',
      item_url: '../img/item/item-2.png',
      tops_url: '../img/tops/tops-2.png',
      bottoms_url: '../img/bottoms/bottoms-2.png',
    },
    {
      create_date: new Date(),
      outfit_name: 'にゃんこ3',
      room_url: '../img/bottoms/bottoms-3.png',
      cat_url: '../img/cat/cat-3.png',
      item_url: '../img/item/item-3.png',
      tops_url: '../img/tops/tops-3.png',
      bottoms_url: '../img/bottoms/bottoms-3.png',
    },
  ]);
};
