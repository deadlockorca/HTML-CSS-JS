import React, { useState } from 'react'
interface ChildProp {
    name: string;
}
const ChildComponent = ({ name }: ChildProp) => {
    console.log(`Renering child component: ${name}`);
    return <div>{name}</div>
}
//React.memo
const MemoizChildComponent = React.memo(
    ({name}: ChildProp) => {
    console.log(`Renering memo: ${name}`);
    return <div>{name}</div>
},
(prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
}
)

const ReactMemo : React.FC = () => {
    const [name, setName] = useState("Duong")
    const [counter, setCounter] = useState<number>(0)
    const handleChangeName = () => {
        setName("Thuyet");
    }
    const handleChangeCounter = () => {
        setCounter((prevState) => {
            return prevState += 1;
        });
    }
  return (
    <div>
        <button className='btn btn-primary mr-2' onClick={handleChangeName}>Change Name</button>
        <button className='btn btn-secondary' onClick={handleChangeCounter}>Change Counter</button>
        <h2>{counter}</h2>
        <ChildComponent name={name}/>
        <MemoizChildComponent name={name}/>
    </div>
  )
}

export default ReactMemo