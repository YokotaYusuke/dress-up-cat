import btn_go_start from '../assets/img/btn/btn-go-start.png';
import btn_go_room from '../assets/img/btn/btn-go-room.png';
import btn_go_album from '../assets/img/btn/btn-go-album.png';

export default function LeftSidebar({ currentView, setCurrentView, setOutfitData }) {
  const handleStartClick = () => {
    setCurrentView('START');
  };

  const handleSelectClick = () => {
    setCurrentView('SELECT');
  };

  const handleAlbumClick = () => {
    const method = 'GET';
    const serverUrl = 'http://localhost:8080'; // サーバー側のURL

    //   fetch(`${serverUrl}/allData`, { method })
    //     .then((res) => res.json())
    //     .then((data) => setOutfitData(data));
    //   setCurrentView('ALBUM');
    // };
    fetch(`/allData`, { method })
      .then((res) => res.json())
      .then((data) => setOutfitData(data));
    setCurrentView('ALBUM');
  };

  return (
    <div className="left-container">
      <div className="left__btn-container">
        {currentView !== 'START' ? <img src={btn_go_start} className="left__btn" alt="bg-start" onClick={handleStartClick} /> : <></>}
        {currentView !== 'START' ? <img src={btn_go_room} className="left__btn" alt="bg-start" onClick={handleSelectClick} /> : <></>}
        {currentView !== 'START' ? <img src={btn_go_album} className="left__btn" alt="bg-start" onClick={handleAlbumClick} /> : <></>}
      </div>
    </div>
  );
}
