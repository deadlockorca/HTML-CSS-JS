import { ClassNames } from "@emotion/react";
import { Component, ReactNode, createContext } from "react";

// Create a new context object with default values
interface MyContextProps {
    value: string;
    updateValue: (newValue: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>
    (undefined);

// Create a context provider
class MyContextProvider extends Component<{ children: ReactNode }, MyContextProps>{
    // updateValue(newValue: string) {
    //     this.setState({ value: newValue });
    // };
    updateValue = (newValue: string) => {
        this.setState({ value: newValue });
    }

    state = {
        value: "Default value",
        // updateValue: this.updateValue.bind(this)
        updateValue: this.updateValue
    };

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

// Create a context consumer
class MyClassComponent extends Component {
    render(){
        return (
            <MyContext.Consumer>
                {(context) => {
                    if(!context) {
                        throw new Error("Context must be within a provider");
                    }
                    return (
                        <div>
                            <p>Value from context : {context.value}</p>
                            <button onClick={() => context.updateValue('New Value')}>New Value</button>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}
//Using MycontextProvider to wrap the MyClassComponent

const ReactContextClass = () => {
    return (
        <MyContextProvider>
            <MyClassComponent />
        </MyContextProvider>
    )
}

export default ReactContextClass;