import { createRef, forwardRef, useImperativeHandle, useState } from "react";

interface ChildComponentProps {
    count: number;
    increaseCount: () => void;
}
//Child Component
const ChildComponent = forwardRef<ChildComponentProps, {}>((props, ref) => {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({count, increaseCount: () => setCount(count + 1)}), [count])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
})

//Parent Component
const ParentComponent = () => {
    const [countParent, setCountParent] = useState(0);
    //Create a ref to share infomation between parent and child component
    const childRef = createRef<ChildComponentProps>();

    const handleIncreaseCount = () => {
        //Call increaseCount function of child component
        if (childRef.current) {
            childRef.current.increaseCount();
            setCountParent(childRef.current?.count)
        }
        return (
            <div>
                {/* Pass the ref to the child component though the ref props */}
                <ChildComponent ref={childRef} />
                <p>Count from parent: {countParent}</p>
                <button onClick={handleIncreaseCount}>Increase count from Parent</button>
            </div>
        )
    }
}
export default ParentComponent;