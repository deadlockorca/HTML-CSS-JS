import { action, makeObservable, observable, reaction } from "mobx";

interface ISpreadSheetStore {
    b: number;
    c: number;
    d: number;
    a: number;

    handleChange: (key: keyof ISpreadSheetStore, value: number) => void;
    calculateA: () => void;
}

class SpreadSheetStore implements ISpreadSheetStore {
    b = 0;
    c = 0;
    d = 0;
    a = 0;

    constructor() {
        makeObservable(this, {
            b: observable,
            c: observable,
            d: observable,
            a: observable,
            handleChange: action,
        });

        reaction(
            // Function that returns the values toobservabe
            () => [this.b, this.c, this.d],
            // Reaction function
            (newValue, reaction) => {
                this.calculateA();
                // Perform actions based on the new values of observables
                // newValues contains an array of the new values of observables in the specified order
            }
            // Additional options (optional)
        )
    }

    handleChange = (key: keyof ISpreadSheetStore, value: number) => {
        // Update the corresponding variable
        (this as any)[key] = value;
    }
    calculateA = () => {
        // Perform the calculation for "a"
        this.a = this.b + this.c + this.d;
    };
}

const spreadSheetStore = new SpreadSheetStore();
export default spreadSheetStore;