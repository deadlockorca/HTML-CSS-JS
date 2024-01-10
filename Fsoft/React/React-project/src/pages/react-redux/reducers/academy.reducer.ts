import { ACTION_TYPES } from "../types/action.types";
import { AcademyState, ActionProps } from "../types/model";

const initState: AcademyState = {
    name: 'FPT Software',
    address: [
        {street: '17 Duy Tan', ward: 'Dich Vong Hau', number: '17', city: 'Ha Noi'},
        {street: 'Hoa Lac', ward: 'Quoc Oai', number: '111', city: 'Ha Noi'},
    ]
};

const academyReducer = (state = initState, action: ActionProps ) => {
    switch (action.type) {
        case ACTION_TYPES.SWAP_ACADEMY_ADDRESS: 
        return {
            ...state,
            address: state.address.reverse()
        };
        default:
            return state;
    }
}

export default academyReducer;