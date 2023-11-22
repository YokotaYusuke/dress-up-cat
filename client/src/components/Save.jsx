import btn_save from '../assets/img/btn/btn-save.png';
import '../styles/App.css';

export default function Save({ setOutfitData, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect }) {
  let PORT = '';
  if (process.env.NODE_ENV === 'development') {
    PORT = 'http://localhost:8080';
  }

  const handleSaveClick = async () => {
    if (!catSelect) {
      window.alert('にゃんこがいません！');
    } else {
      const outfitname = window.prompt('作成したコーデに名前を付けてください');

      if (outfitname !== null) {
        const obj = {
          outfit_name: outfitname || '無名のにゃんこ',
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

        // 開発用
        await fetch(`${PORT}/album`, { method, headers, body })
          .then((res) => res.json())
          .then((data) => setOutfitData(data));

        // 本番用
        // await fetch(`/album`, { method, headers, body })
        //   .then((res) => res.json())
        //   .then((data) => setOutfitData(data));

        window.alert('コーデが"おもいで"に保存されました！');
      } else {
        window.alert('保存がキャンセルされました');
      }
    }
  };

  return (
    <>
      <img src={btn_save} className="left__btn" alt="btn-save" onClick={handleSaveClick} />
    </>
  );
}
