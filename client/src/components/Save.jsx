import btn_save from '../assets/img/btn/btn-save.png';
import '../styles/App.css';

export default function Save({ currentView, setOutfitData, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect }) {
  const serverUrl = 'http://localhost:8080'; // サーバー側のURL

  const handleSaveClick = async () => {
    // 実際(idはサーバーで振る)
    const obj = {
      outfit_name: 'にゃんこ',
      create_date: new Date(),
      room_url: roomSelect,
      cat_url: catSelect,
      item_url: itemSelect,
      tops_url: topsSelect,
      bottoms_url: bottomsSelect,
    };

    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // await fetch(`${serverUrl}/album`, { method, headers, body })
    //   .then((res) => res.json())
    //   .then((data) => setOutfitData(data));
    await fetch(`/album`, { method, headers, body })
      .then((res) => res.json())
      .then((data) => setOutfitData(data));
  };

  // alert('保存されました！');

  return <>{currentView === 'SELECT' ? <img src={btn_save} className="left__btn" alt="btn-save" onClick={handleSaveClick} /> : <></>}</>;
}
