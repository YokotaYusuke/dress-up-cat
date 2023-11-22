import bg_album from '../assets/img/bg/bg-album.png';
import btn_update from '../assets/img/btn/btn-update.png';
import '../styles/App.css';

export default function MiddleAlbum({ outfitData, setOutfitData, setAlbumSelect }) {
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  const PORT = 'http://localhost:8080';

  const handleCatClick = async (event) => {
    console.log('クリックした！！');

    const selectId = event.currentTarget.getAttribute('alt');
    const method = 'GET';

    // 追加分 '/allData/:id'
    // 開発用
    // await fetch(`${PORT}/allData/${selectId}`, { method })
    //   .then((res) => res.json())
    //   .then((data) => setAlbumSelect(data));

    // 本番用
    await fetch(`/allData/${selectId}`, { method })
      .then((res) => res.json())
      .then((data) => setAlbumSelect(data));
  };

  // outfitData配列を逆順にしてから描画する
  const albumElemens = outfitData
    .slice()
    .reverse()
    .map((el) => {
      return (
        <div className="main__data-container" key={el.id}>
          <div className="main__data-click" alt={el.id} onClick={handleCatClick}></div>
          {el.outfit_name && <div className="main__data-title">{el.outfit_name}</div>}
          {el.room_url && <img src={el.room_url} className="bg" alt="room" />}
          {el.cat_url && <img src={el.cat_url} className="select__cat" alt="cat" />}
          {el.item_url && <img src={el.item_url} className="select__cat" alt="item" />}
          {el.tops_url && <img src={el.tops_url} className="select__cat-tops" alt="tops" />}
          {el.bottoms_url && <img src={el.bottoms_url} className="select__cat" alt="bottoms" />}
        </div>
      );
    });

  const handleUpdateClick = () => {
    console.log('updateきた？');
    const method = 'GET';

    // 開発用
    // fetch(`${PORT}/allData`, { method })
    //   .then((res) => res.json())
    //   .then((data) => setOutfitData(data));

    // 本番用
    fetch(`/allData`, { method })
      .then((res) => res.json())
      .then((data) => setOutfitData(data));
  };

  return (
    <>
      <img src={btn_update} className="main__album-btn" alt="btn-update" onClick={handleUpdateClick} />
      <img src={bg_album} className="bg" alt="bg-album" />
      <div className="main__album-container">{albumElemens}</div>
    </>
  );
}
