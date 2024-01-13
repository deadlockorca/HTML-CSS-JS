import React, { ComponentType } from "react";

interface WithAdditionalProp {
    additionalProp: string;
}

//Define HOC that add a new prop to the wrapped component
const WithAdditionalProp = <T extends WithAdditionalProp>(WrappedComponent: ComponentType<T>) => (props: Omit<T,'additionalProp'>) => 
    (
        <WrappedComponent {...(props as T)} additionalProp="I'm an additional prop" />
    );
    interface WrappedComponentProps {
        message: string;
    }

    //Define a component that will be wrapped
    const MyComponent: React.FC<WrappedComponentProps & WithAdditionalProp> = ({message, additionalProp}) => {
        return (
            <div>
                <div>{message}</div>
                <div>{additionalProp}</div>
            </div>
        );
    }
    //use HOC to enhance MyComponent
    const EnhancedComponent = WithAdditionalProp(MyComponent);

    //useage of EnhancedComponent
    const  AppHOC = () => {
        return (
            <EnhancedComponent message="Hello from warraped component" />
        );
    }
    export default AppHOC;