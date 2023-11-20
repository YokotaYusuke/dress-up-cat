import MiddleStart from './MiddleStart';
import MiddleSelect from './MiddleSelect';
import MiddleAlbum from './MiddleAlbum';

export default function Middle({ currentView, setSelectItem, handleBtnClick, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect, handleResetClick, outfitData, setOutfitData }) {
  return (
    <div className="main-container">
      <MiddleStart currentView={currentView} handleBtnClick={handleBtnClick} />
      <MiddleSelect currentView={currentView} roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} setSelectItem={setSelectItem} handleResetClick={handleResetClick} />
      <MiddleAlbum currentView={currentView} outfitData={outfitData} setOutfitData={setOutfitData} />
    </div>
  );
}
