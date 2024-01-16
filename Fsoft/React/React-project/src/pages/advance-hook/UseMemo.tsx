import React, { Fragment, useMemo, useState } from 'react'

function calculateExpensive(number: number) {
    console.log("I'm calculating expensive");

    for (let i = 0; i < 1000; i++) {
        number += 1
    }
    return number;
}

const UseMemoHook = () => {
    const [boolState, setBoolState] = React.useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    // const calculateValue = calculateExpensive(count);
    const calculateValue = useMemo(() => calculateExpensive(count), [count]);
    const increaseCount = () => setCount((prevCount) => prevCount + 1);
    const toggleBoolState = () => setBoolState((prevState) => !prevState);
  return (
    <Fragment>
        <h2>useMemo Hook</h2>
        <div>
            <p>The boolean state is: {boolState.toString()}</p>
            <button className='btn btn-primary' onClick={toggleBoolState}>Toggle Boolean State</button>
        </div>
        <div>
            <p>The calculate result is: {calculateValue}</p>
            <button className='btn btn-primary' onClick={increaseCount}>Increase count</button>
        </div>
    </Fragment>
  )
}

export default UseMemoHook