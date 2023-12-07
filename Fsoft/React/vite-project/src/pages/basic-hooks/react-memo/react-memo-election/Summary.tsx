import { ElectionState } from "./Election.model";
import React, {useEffect} from 'react';
import styles from "./Summary.module.css";

interface SummaryProps {
    state?: ElectionState;
}

const Summary = (props: SummaryProps) => {
    const {state} = props;
    console.log("Summary re-render");
    useEffect(() => {
        console.log("Summary props changed", props);
    },[props]);

    return(
        <div className="{styles.summary">
            <span>Summary</span>
            <h2>State Name: {state?.stateName}</h2>
            <p>
                Number of Elecoral votes:
                <span className={styles.output}>{state?.electoralVote}</span>
            </p>
            {state?.candidates?.map((candidate) => (
                <p key = {candidate.id}>
                    <span>Number vote for {candidate.fullName}</span>{""}
                    <span className={styles.output}> {candidate.vote}</span>
                </p>
            ))}
        </div>
    );
};

export default Summary