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
      {currentView === 'SELECT' && topsSelect ? <img src={topsSelect} className="select__cat" alt="bg-start" /> : <></>}
      {currentView === 'SELECT' && bottomsSelect ? <img src={bottomsSelect} className="select__cat" alt="bg-start" /> : <></>}
      <div className="main__btn-container">
        {currentView === 'SELECT' ? <img src="../img/btn/btn-room.png" className="btn" alt="btn-room" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src="../img/btn/btn-cat.png" className="btn" alt="btn-cat" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src="../img/btn/btn-item.png" className="btn" alt="btn-item" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src="../img/btn/btn-tops.png" className="btn" alt="btn-tops" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src="../img/btn/btn-bottoms.png" className="btn" alt="btn-bottoms" onClick={handleLeftBtnClick} /> : <></>}
        {currentView === 'SELECT' ? <img src="../img/btn/btn-reset.png" className="btn" alt="btn-reset" onClick={handleLeftBtnClick} /> : <></>}
      </div>
    </>
  );
}
