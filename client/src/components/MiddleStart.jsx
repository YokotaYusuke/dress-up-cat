export default function MiddleStart({ currentView, handleBtnClick }) {
  const bgStart = '../img/bg/bg-start.JPG';
  const bgBtn1 = '../img/btn/btn-start.png';
  return (
    <>
      {currentView === 'START' ? <img src={bgStart} className="bg" alt="bg-start" /> : <></>}
      {currentView === 'START' ? <img src={bgBtn1} className="start__btn1" alt="btn-start" onClick={handleBtnClick} /> : <></>}
    </>
  );
}
