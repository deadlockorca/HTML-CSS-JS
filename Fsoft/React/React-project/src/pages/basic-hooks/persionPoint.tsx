import React, { Fragment, useEffect } from 'react'
import { render } from 'react-dom';
interface PersionPointInfo{
    point? : number;
    finalPoint: number;
    changePoint?: () => void;
    setPoint?: (point: number) => void;
}

const PersonPoint = (props: PersionPointInfo,) => {
    const { point, finalPoint, changePoint, setPoint } = props;
    //way 5
   useEffect(() => {
    console.log("childreen-re-render");
    return () => {
        console.log("componentwillunmount");;
    }
   },[]);
  return (
    <Fragment>
        <h3 style={{color: "orange"}}>Your point: <span>{props.point}</span></h3>
        <h3 style={{color: "green"}}>Your final point: <span>{props.finalPoint}</span></h3>
        <button className='btn btn-primary'>Change Point</button>
        <button className='btn btn-primary' onClick={changePoint}>Change Final Point</button>
    </Fragment>
  )
}
export default PersonPoint