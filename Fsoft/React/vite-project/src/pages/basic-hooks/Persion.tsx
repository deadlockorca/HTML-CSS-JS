import React, { useEffect, useState } from 'react'
import PersonPoint from './persionPoint'

function Persion() {
    const [name, setName] = useState<string>("Hieu");
    const [age, setAge] = useState<number>(24);
    const [points, setPoints] = useState(1)
    const [finalPoint, setFinalPoint] = useState(points * 10);
    const [emptyState, setEmptyState] = useState();
    //function
    function handleChangeName(): void {
        setName("Nam");
    }
    function handleChangeAge(): void {
        setAge(25);
    }
    const changePoint = () => {
        setPoints((prevState) => prevState + 1);
    };
    const changeFinalPoint = (point: number) => {
        setFinalPoint((prevState) => (prevState + point) * 10);
    };
    //way 1- run after mouting
    useEffect(() => {
        console.log("componentDidMount");
    },[]);
    //way 2 run on every render
    useEffect(() => {
        console.log("componentdidupdate");
    });
    //way 3 run on dependences change
    useEffect(() => {
        console.log("final point has change");
    }, [finalPoint, points]);
  return (
    <>
    <h2>My name is {name} and I'm {age} years old!</h2>
    <PersonPoint point={points} finalPoint={finalPoint} changePoint={changePoint} setPoint={changeFinalPoint} />
    <button className='btn btn-primary' onClick={handleChangeName}>Change Name</button>
    <button className='btn btn-primary' onClick={handleChangeAge}>Change Age</button>
    <button className='btn btn-danger'></button>
    </>
  )
}

export default Persion