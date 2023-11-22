import MiddleStart from './MiddleStart';
import MiddleSelect from './MiddleSelect';
import MiddleAlbum from './MiddleAlbum';

export default function Middle({ currentView, setSelectItem, handleBtnClick, roomSelect, catSelect, itemSelect, topsSelect, bottomsSelect, handleResetClick, outfitData, setOutfitData, setAlbumSelect }) {
  return (
    <div className="main-container">
      {currentView === 'START' && <MiddleStart handleBtnClick={handleBtnClick} />}
      {currentView === 'SELECT' && <MiddleSelect roomSelect={roomSelect} catSelect={catSelect} itemSelect={itemSelect} topsSelect={topsSelect} bottomsSelect={bottomsSelect} setSelectItem={setSelectItem} handleResetClick={handleResetClick} />}
      {currentView === 'ALBUM' && <MiddleAlbum outfitData={outfitData} setOutfitData={setOutfitData} setAlbumSelect={setAlbumSelect} />}
    </div>
  );
}
