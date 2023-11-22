import SelectItem from './SelectItem';
import Save from './Save';
import SelectAlbum from './SelectAlbum';

export default function RightSidebar({ currentView, selectItem, setCatSelect, setItemSelect, setTopsSelect, setBottomsSelect, setRoomSelect, setOutfitData, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect, outfitData, albumSelect }) {
  return (
    <div className="right-container">
      {currentView === 'SELECT' && <SelectItem currentView={currentView} selectItem={selectItem} setCatSelect={setCatSelect} setItemSelect={setItemSelect} setTopsSelect={setTopsSelect} setBottomsSelect={setBottomsSelect} setRoomSelect={setRoomSelect} />}
      {currentView === 'SELECT' && <Save setOutfitData={setOutfitData} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} />}
      {currentView === 'ALBUM' && <SelectAlbum outfitData={outfitData} albumSelect={albumSelect} />}
    </div>
  );
}
