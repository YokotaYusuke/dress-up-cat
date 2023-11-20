import '../styles/App.css';

export default function SelectItem(props) {
  const handleImgClick = (event) => {
    if (props.selectItem === 'cat') {
      props.setCatSelect(event.currentTarget.src);
    } else if (props.selectItem === 'item') {
      props.setItemSelect(event.currentTarget.src);
    } else if (props.selectItem === 'tops') {
      props.setTopsSelect(event.currentTarget.src);
    } else if (props.selectItem === 'bottoms') {
      props.setBottomsSelect(event.currentTarget.src);
    } else if (props.selectItem === 'room') {
      props.setRoomSelect(event.currentTarget.src);
    }
  };

  return (
    <>
      {props.currentView === 'SELECT' ? (
        <div className="control-panel">
          {props.selectItem === 'room' ? (
            <>
              <img className="item" src="../img/room/room-1.png" alt="room-1" onClick={handleImgClick} />
              <img className="item" src="../img/room/room-2.png" alt="room-2" onClick={handleImgClick} />
              <img className="item" src="../img/room/room-3.png" alt="room-3" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'cat' ? (
            <>
              <img className="item" src="../img/cat/cat-1.png" alt="cat-1" onClick={handleImgClick} />
              <img className="item" src="../img/cat/cat-2.png" alt="cat-2" onClick={handleImgClick} />
              <img className="item" src="../img/cat/cat-3.png" alt="cat-3" onClick={handleImgClick} />
              <img className="item" src="../img/cat/cat-4.png" alt="cat-4" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'item' ? (
            <>
              <img className="item" src="../img/item/item-1.png" alt="item-1" onClick={handleImgClick} />
              <img className="item" src="../img/item/item-2.png" alt="item-2" onClick={handleImgClick} />
              <img className="item" src="../img/item/item-3.png" alt="item-3" onClick={handleImgClick} />
              <img className="item" src="../img/item/item-4.png" alt="item-4" onClick={handleImgClick} />
              <img className="item" src="../img/item/item-5.png" alt="item-5" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'tops' ? (
            <>
              <img className="item" src="../img/tops/tops-1.png" alt="tops-1" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-2.png" alt="tops-2" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-3.png" alt="tops-3" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-4.png" alt="tops-4" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-5.png" alt="tops-5" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-6.png" alt="tops-6" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-7.png" alt="tops-7" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-8.png" alt="tops-8" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-9.png" alt="tops-9" onClick={handleImgClick} />
              <img className="item" src="../img/tops/tops-10.png" alt="tops-10" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'bottoms' ? (
            <>
              <img className="item" src="../img/bottoms/bottoms-1.png" alt="bottoms-1" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-2.png" alt="bottoms-2" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-3.png" alt="bottoms-3" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-4.png" alt="bottoms-4" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-5.png" alt="bottoms-5" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-6.png" alt="bottoms-6" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-7.png" alt="bottoms-7" onClick={handleImgClick} />
              <img className="item" src="../img/bottoms/bottoms-8.png" alt="bottoms-8" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
