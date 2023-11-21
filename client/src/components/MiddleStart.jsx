import bgStart from '../assets/img/bg/bg-start.png';
import bgBtn1 from '../assets/img/btn/btn-start.png';

export default function MiddleStart({ handleBtnClick }) {
  return (
    <>
      <img src={bgStart} className="bg" alt="bg-start" />
      <img src={bgBtn1} className="start__btn" alt="btn-start" onClick={handleBtnClick} />
    </>
  );
}
