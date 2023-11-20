import { useState, useEffect } from 'react';
import '../styles/App.css';
import Middle from './Middle';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

function App() {
  const [currentView, setCurrentView] = useState('START');
  const [selectItem, setSelectItem] = useState('');
  const [catSelect, setCatSelect] = useState(); // '../img/cat/cat-1.png'
  const [itemSelect, setItemSelect] = useState(); // ../img/item/item-5.png
  const [topsSelect, setTopsSelect] = useState(); // ../img/tops/tops-1.png
  const [bottomsSelect, setBottomsSelect] = useState(); // ../img/bottoms/bottoms-3.png
  const [roomSelect, setRoomSelect] = useState('../img/room/room-1.png'); // '../img/bg/bg-start.JPG'
  const [outfitData, setOutfitData] = useState([]);

  const serverUrl = 'http://localhost:8080'; // サーバー側のURL

  const handleBtnClick = async () => {
    await fetch(`${serverUrl}/api`, { method: 'GET' });
    setCurrentView('SELECT');
  };

  const handleResetClick = () => {
    setCatSelect(null);
    setItemSelect(null);
    setTopsSelect(null);
    setBottomsSelect(null);
    setRoomSelect('../img/room/room-1.png');
  };

  return (
    <>
      <LeftSidebar currentView={currentView} setCurrentView={setCurrentView} />
      <Middle currentView={currentView} setSelectItem={setSelectItem} handleBtnClick={handleBtnClick} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} handleResetClick={handleResetClick} outfitData={outfitData} setOutfitData={setOutfitData} />
      <RightSidebar currentView={currentView} selectItem={selectItem} setCatSelect={setCatSelect} setItemSelect={setItemSelect} setTopsSelect={setTopsSelect} setBottomsSelect={setBottomsSelect} setRoomSelect={setRoomSelect} setOutfitData={setOutfitData} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} />
    </>
  );
}

export default App;
