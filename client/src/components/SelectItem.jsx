import '../styles/App.css';
import room1 from '../assets/img/room/room-1.png';
import room2 from '../assets/img/room/room-2.png';
import room3 from '../assets/img/room/room-3.png';
import room4 from '../assets/img/room/room-4.png';
import cat1 from '../assets/img/cat/cat-1.png';
import cat2 from '../assets/img/cat/cat-2.png';
import cat3 from '../assets/img/cat/cat-3.png';
import cat4 from '../assets/img/cat/cat-4.png';
import item1 from '../assets/img/item/item-1.png';
import item2 from '../assets/img/item/item-2.png';
import item3 from '../assets/img/item/item-3.png';
import item4 from '../assets/img/item/item-4.png';
import item5 from '../assets/img/item/item-5.png';
import tops1 from '../assets/img/tops/tops-1.png';
import tops2 from '../assets/img/tops/tops-2.png';
import tops3 from '../assets/img/tops/tops-3.png';
import tops4 from '../assets/img/tops/tops-4.png';
import tops5 from '../assets/img/tops/tops-5.png';
import tops6 from '../assets/img/tops/tops-6.png';
import tops7 from '../assets/img/tops/tops-7.png';
import tops8 from '../assets/img/tops/tops-8.png';
import tops9 from '../assets/img/tops/tops-9.png';
import tops10 from '../assets/img/tops/tops-10.png';
import bottoms1 from '../assets/img/bottoms/bottoms-1.png';
import bottoms2 from '../assets/img/bottoms/bottoms-2.png';
import bottoms3 from '../assets/img/bottoms/bottoms-3.png';
import bottoms4 from '../assets/img/bottoms/bottoms-4.png';
import bottoms5 from '../assets/img/bottoms/bottoms-5.png';
import bottoms6 from '../assets/img/bottoms/bottoms-6.png';
import bottoms7 from '../assets/img/bottoms/bottoms-7.png';
import bottoms8 from '../assets/img/bottoms/bottoms-8.png';

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
              <img className="item" src={room1} alt="room-1" onClick={handleImgClick} />
              <img className="item" src={room2} alt="room-2" onClick={handleImgClick} />
              <img className="item" src={room3} alt="room-3" onClick={handleImgClick} />
              <img className="item" src={room4} alt="room-4" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'cat' ? (
            <>
              <img className="item" src={cat1} alt="cat-1" onClick={handleImgClick} />
              <img className="item" src={cat2} alt="cat-2" onClick={handleImgClick} />
              <img className="item" src={cat3} alt="cat-3" onClick={handleImgClick} />
              <img className="item" src={cat4} alt="cat-4" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'item' ? (
            <>
              <img className="item" src={item1} alt="item-1" onClick={handleImgClick} />
              <img className="item" src={item2} alt="item-2" onClick={handleImgClick} />
              <img className="item" src={item3} alt="item-3" onClick={handleImgClick} />
              <img className="item" src={item4} alt="item-4" onClick={handleImgClick} />
              <img className="item" src={item5} alt="item-5" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'tops' ? (
            <>
              <img className="item" src={tops1} alt="tops-1" onClick={handleImgClick} />
              <img className="item" src={tops2} alt="tops-2" onClick={handleImgClick} />
              <img className="item" src={tops3} alt="tops-3" onClick={handleImgClick} />
              <img className="item" src={tops4} alt="tops-4" onClick={handleImgClick} />
              <img className="item" src={tops5} alt="tops-5" onClick={handleImgClick} />
              <img className="item" src={tops6} alt="tops-6" onClick={handleImgClick} />
              <img className="item" src={tops7} alt="tops-7" onClick={handleImgClick} />
              <img className="item" src={tops8} alt="tops-8" onClick={handleImgClick} />
              <img className="item" src={tops9} alt="tops-9" onClick={handleImgClick} />
              <img className="item" src={tops10} alt="tops-10" onClick={handleImgClick} />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'bottoms' ? (
            <>
              <img className="item" src={bottoms1} alt="bottoms-1" onClick={handleImgClick} />
              <img className="item" src={bottoms2} alt="bottoms-2" onClick={handleImgClick} />
              <img className="item" src={bottoms3} alt="bottoms-3" onClick={handleImgClick} />
              <img className="item" src={bottoms4} alt="bottoms-4" onClick={handleImgClick} />
              <img className="item" src={bottoms5} alt="bottoms-5" onClick={handleImgClick} />
              <img className="item" src={bottoms6} alt="bottoms-6" onClick={handleImgClick} />
              <img className="item" src={bottoms7} alt="bottoms-7" onClick={handleImgClick} />
              <img className="item" src={bottoms8} alt="bottoms-8" onClick={handleImgClick} />
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
