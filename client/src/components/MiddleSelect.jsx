import btn_room from '../assets/img/btn/btn-room.png';
import btn_cat from '../assets/img/btn/btn-cat.png';
import btn_item from '../assets/img/btn/btn-item.png';
import btn_tops from '../assets/img/btn/btn-tops.png';
import btn_bottoms from '../assets/img/btn/btn-bottoms.png';
import btn_reset from '../assets/img/btn/btn-reset.png';

export default function MiddleSelect({ roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect, setSelectItem, handleResetClick }) {
  const handleLeftBtnClick = (event) => {
    if (event.target.alt === 'btn-room') {
      setSelectItem('room');
    } else if (event.target.alt === 'btn-cat') {
      setSelectItem('cat');
    } else if (event.target.alt === 'btn-item') {
      setSelectItem('item');
    } else if (event.target.alt === 'btn-tops') {
      setSelectItem('tops');
    } else if (event.target.alt === 'btn-bottoms') {
      console.log('bottoms来てる？');
      console.log(event.target.alt);
      setSelectItem('bottoms');
    } else if (event.target.alt === 'btn-reset') {
      setSelectItem(null);
      handleResetClick();
    }
  };
  return (
    <>
      <img src={roomSelect} className="bg" alt="room" />
      {catSelect && <img src={catSelect} className="select__cat" alt="cat" />}
      {itemSelect && <img src={itemSelect} className="select__cat" alt="item" />}
      {topsSelect && <img src={topsSelect} className="select__cat-tops" alt="tops" />}
      {bottomsSelect && <img src={bottomsSelect} className="select__cat" alt="bottoms" />}
      <div className="main__btn-container">
        <img src={btn_room} className="btn" alt="btn-room" onClick={handleLeftBtnClick} />
        <img src={btn_cat} className="btn" alt="btn-cat" onClick={handleLeftBtnClick} />
        <img src={btn_item} className="btn" alt="btn-item" onClick={handleLeftBtnClick} />
        <img src={btn_tops} className="btn" alt="btn-tops" onClick={handleLeftBtnClick} />
        <img src={btn_bottoms} className="btn" alt="btn-bottoms" onClick={handleLeftBtnClick} />
        <img src={btn_reset} className="btn" alt="btn-reset" onClick={handleLeftBtnClick} />
      </div>
    </>
  );
}
