import { Fragment, ReactElement, useState } from "react";

const ButtonCounter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((prevState) => prevState + 1);

    return (
        <div><button onClick={increaseCount}>Count: {count}</button></div>
    );
};

const reactanglesStyles: React.CSSProperties = {
    width: '100px',
    border: '1px solid black',
    padding: '2rem',
    textAlign: 'center',
}

const ReactangleHoverCounter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((prevState) => prevState + 1);
    return (
        <div style={reactanglesStyles} onMouseEnter={increaseCount}>Hover time: </div>
    )
}
// Define interface/type for component

type CounterProps = {
    render: (count: number, increaseCount:() => void) => ReactElement;
}
const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((prevState) => prevState + 1);
    return (
        <div className="text-left">
            {props.render(count, increaseCount)}
        </div>
    )

}

export default function RenderProps() {
    return (
        <Fragment>
            <Counter render={(count, increamentCount) => (
                <button onClick={increamentCount}>Count: {count}</button>
            )} />
            <Counter render={(count, increamentCount) => (
                <div style={reactanglesStyles} onMouseEnter={increamentCount}>Hover time: {count}</div>
            )} />
        </Fragment>
    )
}