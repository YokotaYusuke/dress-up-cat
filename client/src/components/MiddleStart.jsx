import bgStart from '../assets/img/bg/bg-start.png';
import bgBtn1 from '../assets/img/btn/btn-start.png';

export default function MiddleStart({ currentView, handleBtnClick }) {
  return (
    <>
      {currentView === 'START' ? <img src={bgStart} className="bg" alt="bg-start" /> : <></>}
      {currentView === 'START' ? <img src={bgBtn1} className="start__btn1" alt="btn-start" onClick={handleBtnClick} /> : <></>}
    </>
  );
}
