import React, { Fragment, useCallback } from 'react'

interface CountComponentProps {
    count: number;
    increaseCount: () => void;
}

function CountComponent({ count, increaseCount}: CountComponentProps){
    console.log("Count compinent render");
    return (
        <div>
            <p>Count: <strong>{count}</strong></p>
            <button className="btn btn-primary" onClick={increaseCount}>Click</button>
        </div>
    )
}

const UseCallback = () => {
    const [bool, setBool] = React.useState<boolean>(false);
    const [count, setCount] = React.useState<number>(0);

    const increaseCount = useCallback(() => setCount((prevCount) => prevCount + 1), [count]);

    const toggleBoolState = () => setBool((prevState) => !prevState);
    const MemoCount = React.memo(CountComponent);
  return (
    <Fragment>
        <h2>UseCallbackHook</h2>
        <div>
            <p>Bool state: {bool.toString()}</p>
            <button className='btn btn-primary' onClick={toggleBoolState}>Toggle Bool State</button>
        </div>
        <div>
            <MemoCount count={count} increaseCount={increaseCount} />
        </div>
    </Fragment>
  )
}

export default UseCallback