import { ACTION_TYPES } from "../types/action.types";

interface CounterState {
    countA: number;
    countB: number;
    total: number;
    quantity: number;
}

interface ActionProps {
    type?: string;
    payload?: any;
}

const initState: CounterState = {
    countA: 10,
    countB: 1,
    total: 11,
    quantity: 0,
};

const counterReducer = (state = initState, action: ActionProps) => {
    console.log('counterReducerAction', action);

    switch (action.type) {
        case ACTION_TYPES.INCREASE_COUNTER_A:
            return {
                ...state,
                countA: (state.countA += action.payload.number),
                total: state.countA + state.countB,
            };
        case ACTION_TYPES.INCREASE_COUNTER_B:
            return {
                ...state,
                countB: (state.countB += action.payload.number),
                total: state.countA + state.countB,
            };
        case ACTION_TYPES.INCREASE_QUANTITY:
            return {
                ...state,
                quantity: (state.quantity += 1),
            };    
        default:
            return state;
    }
}

export default counterReducer;