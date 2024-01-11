export interface CounterState {
    countA: number;
    countB: number;
    total: number;
    quantity: number;
}

export interface ActionProps {
    type?: string;
    payload?: any;
}

export interface AcademyState {
    name: string;
    address: AddressProps[];
}

export interface AddressProps {
    street: string;
    ward: string;
    number: string;
    city: string;
}

export interface RootState {
    counterReducer: CounterState;
    academyReducer: AcademyState;
    user: any;
}
