import { useState } from 'react';
import '../styles/App.css';
import Middle from './Middle';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import room from '../assets/img/room/room-1.png';

function App() {
  const [currentView, setCurrentView] = useState('START');
  const [selectItem, setSelectItem] = useState('');
  const [catSelect, setCatSelect] = useState();
  const [itemSelect, setItemSelect] = useState();
  const [topsSelect, setTopsSelect] = useState();
  const [bottomsSelect, setBottomsSelect] = useState();
  const [roomSelect, setRoomSelect] = useState(room);
  const [outfitData, setOutfitData] = useState([]);
  const [albumSelect, setAlbumSelect] = useState();

  const handleBtnClick = () => {
    setCurrentView('SELECT');
  };

  const handleResetClick = () => {
    setCatSelect(null);
    setItemSelect(null);
    setTopsSelect(null);
    setBottomsSelect(null);
    setRoomSelect(room);
  };

  return (
    <>
      <LeftSidebar currentView={currentView} setCurrentView={setCurrentView} setOutfitData={setOutfitData} />
      <Middle currentView={currentView} setSelectItem={setSelectItem} handleBtnClick={handleBtnClick} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} handleResetClick={handleResetClick} outfitData={outfitData} setOutfitData={setOutfitData} setAlbumSelect={setAlbumSelect} />
      <RightSidebar currentView={currentView} selectItem={selectItem} setCatSelect={setCatSelect} setItemSelect={setItemSelect} setTopsSelect={setTopsSelect} setBottomsSelect={setBottomsSelect} setRoomSelect={setRoomSelect} setOutfitData={setOutfitData} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} outfitData={outfitData} albumSelect={albumSelect} />
    </>
  );
}

export default App;
