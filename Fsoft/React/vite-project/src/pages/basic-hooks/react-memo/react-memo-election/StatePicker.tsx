import React, { ChangeEvent } from 'react'
import styles from "./Summary.module.css"

interface StatePickerProps {
    option: any[];
    selectedId?: number;
    onSelectState: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StatePicker = (props: StatePickerProps) => {
    const { option, selectedId, onSelectState } = props;
    if (option.length ===0){
        return <div>No data</div>
    }
    return (
        <div>
            <h2>Selected Sate: {selectedId}</h2>
            <select
            onChange={onSelectState}
            value={selectedId}
            className={styles.select}
            >
                {option.map((char) => (
                    <option value = {char.id} key ={char.id}>
                        {char.stateName}
                    </option>
                ))}
            </select>
        </div>
    )
}    
export default StatePicker;