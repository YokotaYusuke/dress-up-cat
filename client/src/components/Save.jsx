import '../styles/App.css';

export default function Save({ currentView, setOutfitData, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect }) {
  const serverUrl = 'http://localhost:8080'; // サーバー側のURL

  const handleSaveClick = async () => {
    console.log('Saveボタンが押されました！');
    // console.log('roomSelectの確認：', roomSelect);
    // console.log('クライアント側', obj);

    // 実際(idはサーバーで振る)
    const obj = {
      name: 'にゃんこ',
      createDate: '2022-11-20',
      room: roomSelect,
      cat: catSelect,
      item: itemSelect,
      tops: topsSelect,
      bottoms: bottomsSelect,
    };

    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    fetch(`${serverUrl}/album`, { method, headers, body })
      .then((res) => res.json())
      .then((data) => setOutfitData(data));
  };

  return <>{currentView === 'SELECT' ? <img src="../img/btn/btn-save.png" className="left__btn" alt="btn-save" onClick={handleSaveClick} /> : <></>}</>;
}

// サーバー側にリクエストを投げる
// サーバー側でリクエストを受け取る
// サーバー側で配列に格納
// フロントにレスポンスを返す

// コーデのオブジェクト(sample)
// const obj = {
//   id: 1,
//   name: 'にゃんこ',
//   createDate: '2022-11-20',
//   room: '../img/bottoms/bottoms-3.png',
//   cat: '../img/cat/cat-1.png',
//   item: '../img/item/item-5.png',
//   tops: '../img/tops/tops-1.png',
//   bottoms: '../img/bottoms/bottoms-3.png',
// };
