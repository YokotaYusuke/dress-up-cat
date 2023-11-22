export default function SelectAlbum({ albumSelect }) {
  // outfitsの配列の中でインデックス番号を指定して描画する
  const createSelectAlbum = () => {
    console.log('albumSelect', albumSelect);
    if (albumSelect) {
      return (
        <div className="select__album-box">
          {albumSelect.outfit_name && <div className="main__data-title">{albumSelect.outfit_name}</div>}
          {albumSelect.room_url && <img src={albumSelect.room_url} className="bg" alt="room" />}
          {albumSelect.cat_url && <img src={albumSelect.cat_url} className="select__cat" alt="cat" />}
          {albumSelect.item_url && <img src={albumSelect.item_url} className="select__cat" alt="item" />}
          {albumSelect.tops_url && <img src={albumSelect.tops_url} className="select__cat-tops" alt="tops" />}
          {albumSelect.bottoms_url && <img src={albumSelect.bottoms_url} className="select__cat" alt="bottoms" />}
        </div>
      );
    }
  };

  return <div className="select__album-container">{createSelectAlbum()}</div>;
}
