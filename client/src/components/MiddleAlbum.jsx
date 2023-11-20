import '../styles/App.css';
import { useState, useEffect } from 'react';

export default function MiddleAlbum({ currentView, outfitData, setOutfitData }) {
  const bgAlbum = '../img/bg/bg-album.PNG';
  const serverUrl = 'http://localhost:8080'; // サーバー側のURL

  // 保存された配列を展開して描画したい
  const albumElemens = outfitData.map((el) => {
    // console.log('描画する前', outfitData);
    return (
      <div className="main__data-container" key={el.id}>
        {el.title && <div className="main__data-title">{el.name}</div>}
        {el.room && <img src={el.room} className="bg" alt="room" />}
        {el.cat && <img src={el.cat} className="select__cat" alt="cat" />}
        {el.item && <img src={el.item} className="select__cat" alt="item" />}
        {el.tops && <img src={el.tops} className="select__cat" alt="tops" />}
        {el.bottoms && <img src={el.bottoms} className="select__cat" alt="bottoms" />}
      </div>
    );
  });

  const handleUpdateClick = () => {
    console.log('updateきた？');
    const method = 'GET';

    fetch(`${serverUrl}/allData`, { method })
      .then((res) => res.json())
      .then((data) => setOutfitData(data));
  };

  return (
    <>
      {currentView === 'ALBUM' ? <img src="../img/btn/btn-update.png" className="main__album-btn" alt="btn-update" onClick={handleUpdateClick} /> : <></>}
      {currentView === 'ALBUM' ? <img src={bgAlbum} className="bg" alt="bg-album" /> : <></>}
      {currentView === 'ALBUM' ? <div className="main__album-container">{albumElemens}</div> : <></>}
    </>
  );
}
