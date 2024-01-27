import { Fragment, useState } from "react";

// Define a generic type for the useToggle hook
type ToggleValue = boolean | string | number;
export function useToggle(defaultValue: ToggleValue): [ToggleValue, (value?: ToggleValue) => void]{
    const [value, setValue] = useState<ToggleValue>(defaultValue);

    function toggleValue(value?: ToggleValue) {
        setValue((currentValue) => typeof value === "boolean" ? !value : !currentValue);
    }
    return [value, toggleValue];
}

export default function ToggleHook() {
    const [value, toggleValue] = useToggle(false);

    return (
        <Fragment>
            <div>{value.toString()}</div>
            <button onClick={() => toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make true</button>
            <button onClick={() => toggleValue(false)}>Make false</button>
        </Fragment>
    )
}