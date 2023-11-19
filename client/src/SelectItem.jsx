import './App.css';

export default function SelectItem(props) {
  console.log('alt', props.alt);
  //   const url = `../img/${props.alt}/tops-1.png`
  //   var folderPath = '../img/tops/';
  //   var cnt = new ActiveXObject('Shell.Application').NameSpace(folderPath).Items().count;
  //   alert(cnt);

  return (
    <>
      {props.currentView === 'SELECT' ? (
        <div className="control-panel">
          {props.selectItem === 'cat' ? (
            <>
              <img className="item" src="../img/cat/cat-1.png" alt="" />
              <img className="item" src="../img/cat/cat-2.png" alt="" />
              <img className="item" src="../img/cat/cat-3.png" alt="" />
              <img className="item" src="../img/cat/cat-4.png" alt="" />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'item' ? (
            <>
              <img className="item" src="../img/item/item-1.png" alt="" />
              <img className="item" src="../img/item/item-2.png" alt="" />
              <img className="item" src="../img/item/item-3.png" alt="" />
              <img className="item" src="../img/item/item-4.png" alt="" />
              <img className="item" src="../img/item/item-5.png" alt="" />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'tops' ? (
            <>
              <img className="item" src="../img/tops/tops-1.png" alt="" />
              <img className="item" src="../img/tops/tops-2.png" alt="" />
              <img className="item" src="../img/tops/tops-3.png" alt="" />
              <img className="item" src="../img/tops/tops-4.png" alt="" />
              <img className="item" src="../img/tops/tops-5.png" alt="" />
              <img className="item" src="../img/tops/tops-6.png" alt="" />
              <img className="item" src="../img/tops/tops-7.png" alt="" />
              <img className="item" src="../img/tops/tops-8.png" alt="" />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'bottoms' ? (
            <>
              <img className="item" src="../img/bottoms/bottoms-1.png" alt="" />
              <img className="item" src="../img/bottoms/bottoms-2.png" alt="" />
              <img className="item" src="../img/bottoms/bottoms-3.png" alt="" />
              <img className="item" src="../img/bottoms/bottoms-4.png" alt="" />
            </>
          ) : (
            <></>
          )}
          {props.selectItem === 'room' ? (
            <>
              <img className="item" src="../img/room/room-1.png" alt="" />
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

{
  /* <img className="item" src="../img/bottoms/bottoms-1.png" alt="" />
          <img className="item" src="../img/bottoms/bottoms-2.png" alt="" />
          <img className="item" src="../img/bottoms/bottoms-3.png" alt="" />
          <img className="item" src="../img/bottoms/bottoms-4.png" alt="" /> */
}
{
  /* <img className="item" src="../img/room/room-1.png" alt="" /> */
}
