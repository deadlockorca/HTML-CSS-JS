import { ACTION_TYPES } from "../types/action.types";

export function increaseCountA(value: number){
    console.log('increaseCountA', value);
    return {type: ACTION_TYPES.INCREASE_COUNTER_A, payload: {number: value}}
}
export function increaseCountB(value: number){
    console.log('increaseCountB');
    return {type: ACTION_TYPES.INCREASE_COUNTER_B, payload: {number: value}};
}
export function increaseQuantity(value: number){
    console.log('increaseQuantity');
    return {type: ACTION_TYPES.INCREASE_QUANTITY};
}

