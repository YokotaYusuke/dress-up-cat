import { useEffect } from 'react';
import '../styles/App.css';

export default function Album(props) {
  useEffect(() => {
    props.outfitData.map((data, i) => {
      <div key={i}>{data['id']}</div>;
    });
  }, [props.outfitData]);
  return (
    <>
      <div>
        {props.outfitData.map((data, i) => {
          return <div key={i}>{data['name']}</div>;
        })}
      </div>
    </>
  );
}
