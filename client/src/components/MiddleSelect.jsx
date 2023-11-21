import btn_room from '../assets/img/btn/btn-room.png';
import btn_cat from '../assets/img/btn/btn-cat.png';
import btn_item from '../assets/img/btn/btn-item.png';
import btn_tops from '../assets/img/btn/btn-tops.png';
import btn_bottoms from '../assets/img/btn/btn-bottoms.png';
import btn_reset from '../assets/img/btn/btn-reset.png';

export default function MiddleSelect({ currentView, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect, setSelectItem, handleResetClick }) {
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
      setSelectItem('bottoms');
    } else if (event.target.alt === 'btn-reset') {
      setSelectItem(null);
      handleResetClick();
    }
  };
  return (
    <>
      {currentView === 'SELECT' ? <img src={roomSelect} className="bg" alt="bg-room" /> : <></>}
      {currentView === 'SELECT' && catSelect ? <img src={catSelect} className="select__cat" alt="bg-start" /> : <></>}
      {currentView === 'SELECT' && itemSelect ? <img src={itemSelect} className="select__cat" alt="bg-start" /> : <></>}
      {currentView === 'SELECT' && topsSelect ? <img src={topsSelect} className="select__cat-tops" alt="bg-start" /> : <></>}
      {currentView === 'SELECT' && bottomsSelect ? <img src={bottomsSelect} className="select__cat" alt="bg-start" /> : <></>}
      <div className="main__btn-container">
        {currentView === 'SELECT' ? <img src={btn_room} className="btn" alt="btn-room" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src={btn_cat} className="btn" alt="btn-cat" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src={btn_item} className="btn" alt="btn-item" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src={btn_tops} className="btn" alt="btn-tops" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src={btn_bottoms} className="btn" alt="btn-bottoms" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src={btn_reset} className="btn" alt="btn-reset" onClick={handleLeftBtnClick} /> : <></>}
      </div>
    </>
  );
}
