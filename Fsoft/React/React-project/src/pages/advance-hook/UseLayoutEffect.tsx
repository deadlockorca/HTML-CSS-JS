import React, { useEffect } from 'react'

const BlinkyLayoutlEffect = () => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if(value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);
  return (
    <div>
        <h2 className='mb-2'>value: {value}</h2>
        <button onClick={() => setValue(0)}>Set value hook</button>
    </div>
  )
}

const BlinkyNormalEffcet = () => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if(value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);
  return (
    <div>
        <h2 className='mb-2'>value: {value}</h2>
        <button onClick={() => setValue(0)}>Set value normal</button>
    </div>
  )
}

const UseLayoutEffect = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-6'>
                        <h2>useEffect</h2>
                        <BlinkyNormalEffcet />
                    </div>
                    <div className='col-6'>
                        <h2>useLayoutEffect</h2>
                        <BlinkyLayoutlEffect />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlinkyNormalEffcet