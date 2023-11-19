import { useState, useEffect } from 'react';
import './App.css';
import SelectItem from './SelectItem';

function App() {
  // const [obj, setObj] = useState();
  const [panelView, setPanelView] = useState('');
  const [currentView, setCurrentView] = useState('START');
  const [panelImg, setPanelImg] = useState([]);
  const [selectItem, setSelectItem] = useState('');

  const serverUrl = 'http://localhost:8080'; // サーバー側のURL
  const bgStart = '../img/bg/bg-start.JPG';
  const bgBtn1 = '../img/btn/btn-start.png';
  const bgSelect = '../img/room/room-1.png';
  const cat1 = '../img/cat/cat-1.png';

  const handleBtnClick = async () => {
    await fetch(`${serverUrl}/api`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setCurrentView('SELECT');
  };

  let alt = '';
  const handleSelectBtnClick = async (event) => {
    console.log('event', event.target.alt);
    alt = event.target.alt;
    setPanelView(event.target.alt);
    createControlPanel();
  };

  useEffect(() => {
    setPanelImg();
  }, []);

  const createControlPanel = () => {
    // console.log('panelView:', panelView);
  };

  return (
    <>
      <div className="left-container">
        <div className="left__btn-container">
          {currentView === 'SELECT' ? <img src="../img/btn/btn-go-start.png" className="left__btn" alt="bg-start" /> : <></>}
          {currentView === 'SELECT' ? <img src="../img/btn/btn-go-room.png" className="left__btn" alt="bg-start" /> : <></>}
          {currentView === 'SELECT' ? <img src="../img/btn/btn-go-album.png" className="left__btn" alt="bg-start" /> : <></>}
        </div>
      </div>
      <div className="main-container">
        <>
          {currentView === 'START' ? <img src={bgStart} className="bg" alt="bg-start" /> : <></>}
          {currentView === 'START' ? <img src={bgBtn1} className="start__btn1" alt="btn-start" onClick={handleBtnClick} /> : <></>}
        </>
        <>
          {currentView === 'SELECT' ? <img src={bgSelect} className="bg" alt="bg-room" /> : <></>}
          {currentView === 'SELECT' ? <img src={cat1} className="select__cat" alt="bg-start" /> : <></>}
          {currentView === 'SELECT' ? <img src="../img/tops/tops-1.png" className="select__cat" alt="bg-start" /> : <></>}
          {currentView === 'SELECT' ? <img src="../img/item/item-5.png" className="select__cat" alt="bg-start" /> : <></>}
          {currentView === 'SELECT' ? <img src="../img/bottoms/bottoms-3.png" className="select__cat" alt="bg-start" /> : <></>}
        </>
        <div className="main__btn-container">
          {currentView === 'SELECT' ? (
            <img
              src="../img/btn/btn-cat.png"
              className="btn"
              alt="cat"
              onClick={() => {
                setSelectItem('cat');
              }}
            />
          ) : (
            <></>
          )}
          {currentView === 'SELECT' ? (
            <img
              src="../img/btn/btn-item.png"
              className="btn"
              alt="bg-start"
              onClick={() => {
                setSelectItem('item');
              }}
            />
          ) : (
            <></>
          )}
          {currentView === 'SELECT' ? (
            <img
              src="../img/btn/btn-tops.png"
              className="btn"
              alt="bg-start"
              onClick={() => {
                setSelectItem('tops');
              }}
            />
          ) : (
            <></>
          )}
          {currentView === 'SELECT' ? (
            <img
              src="../img/btn/btn-bottoms.png"
              className="btn"
              alt="bg-start"
              onClick={() => {
                setSelectItem('bottoms');
              }}
            />
          ) : (
            <></>
          )}
          {currentView === 'SELECT' ? (
            <img
              src="../img/btn/btn-room.png"
              className="btn"
              alt="bg-start"
              onClick={() => {
                setSelectItem('room');
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="right-container">
        <SelectItem panelView={panelView} currentView={currentView} selectItem={selectItem} />
        {currentView === 'SELECT' ? <img src="../img/btn/btn-save.png" className="left__btn" alt="bg-start" /> : <></>}
      </div>
    </>
  );
}

export default App;
