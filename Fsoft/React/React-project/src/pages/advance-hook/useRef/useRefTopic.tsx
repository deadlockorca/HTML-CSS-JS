import { ClassNames } from "@emotion/react";
import { Component, Fragment, ReactNode, createRef, useEffect, useRef, useState } from "react";


export function ToggleFocusFunc() {
    const inputRef = useRef<HTMLInputElement>(null);
    const FocusInput = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <form action="">
                <div>
                    <input type="text" placeholder="Input with ref" ref={inputRef}/>
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Input with no ref" />
                </div>
                <br />
                <button type="button" onClick={FocusInput}>Click to focus input</button>
            </form>
    )
}
export class ToggleFocusClass extends Component {
    inputRef: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.inputRef = createRef<HTMLInputElement>();
    }

    focusInput = () => {
        if(this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    render(): ReactNode {
        return (
            <form action="">
                <div>
                    <input type="text" placeholder="Input with ref" ref={this.inputRef}/>
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Input with no ref" />
                </div>
                <br />
                <button type="button" onClick={this.focusInput}>Click to focus input</button>
            </form>
        )
    }
}

export function TrackingStateChange() {
    const [inputValue, setInputValue] = useState<string>('');
    const prevInputValue = useRef<string>('');

    useEffect(() => {
        console.log('inputValue: ', inputValue);
        prevInputValue.current = inputValue;
    },[inputValue]);
    return (
        <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h2>Current value: {inputValue}</h2>
        <h2>Previous value: {prevInputValue.current}</h2>
        </>
    )
}

export function CountReRender() {
    const [text, setText] = useState('');
    const renderTimes = useRef(0);
    useEffect(() => {
        renderTimes.current++;
    })

    return (
        <Fragment>
            <div>Render times: {renderTimes.current}</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </Fragment>
    )
}