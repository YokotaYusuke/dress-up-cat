import SelectItem from './SelectItem';
import Save from './Save';

export default function RightSidebar({ currentView, selectItem, setCatSelect, setItemSelect, setTopsSelect, setBottomsSelect, setRoomSelect, setOutfitData, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect }) {
  return (
    <div className="right-container">
      {currentView === 'SELECT' && <SelectItem currentView={currentView} selectItem={selectItem} setCatSelect={setCatSelect} setItemSelect={setItemSelect} setTopsSelect={setTopsSelect} setBottomsSelect={setBottomsSelect} setRoomSelect={setRoomSelect} />}
      {currentView === 'SELECT' && <Save setOutfitData={setOutfitData} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} />}
    </div>
  );
}
