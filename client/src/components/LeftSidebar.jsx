export default function LeftSidebar({ currentView, setCurrentView }) {
  return (
    <div className="left-container">
      <div className="left__btn-container">
        {currentView !== 'START' ? (
          <img
            src="../img/btn/btn-go-start.png"
            className="left__btn"
            alt="bg-start"
            onClick={() => {
              setCurrentView('START');
            }}
          />
        ) : (
          <></>
        )}
        {currentView !== 'START' ? (
          <img
            src="../img/btn/btn-go-room.png"
            className="left__btn"
            alt="bg-start"
            onClick={() => {
              setCurrentView('SELECT');
            }}
          />
        ) : (
          <></>
        )}
        {currentView !== 'START' ? (
          <img
            src="../img/btn/btn-go-album.png"
            className="left__btn"
            alt="bg-start"
            onClick={() => {
              setCurrentView('ALBUM');
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
