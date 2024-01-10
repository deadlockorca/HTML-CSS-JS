import { Formik } from "formik";
import React from "react";
import { ErrorMessage, Field, Form } from "formik";
interface ComplexFormValues {
    text: string;
    number: number;
    date: Date;
    checked: boolean;
    radio: string
}
interface ComplexFormErrors {
    text: string;
    number: string;

}

const initialValues: ComplexFormValues = {
    text: "",
    number: 0,
    date: new Date(),
    checked: false,
    radio: "",
};

const ReactFormikNew = () => {
    const handleSubmit = (values: ComplexFormValues) => {
        console.log("submit");
        console.log(values);
    }
    const validate = (values: ComplexFormValues) => {
        const errors: Partial<ComplexFormErrors> = {};

        if(!values.text) {
            errors.text = "Text is required";
        }
        if(values.number <= 0) {
            errors.number = "Number must be greater than 0";
        }
        console.log(validate);
        return errors;  
    };
    return  (
        <Formik
        onSubmit = {handleSubmit} 
        validate = {validate}
        initialValues = {initialValues}>
            {({values}) => (
                <Form>
                    {/* Text Field */}
                    <div>
                        <label htmlFor="text">Text: </label>
                        <Field type="text" id="text" name="text"/>
                        <ErrorMessage name="text" component="div"/>
                    </div>
                    {/* Number Field */}
                    <div>
                        <label htmlFor="number">Number: </label>
                        <Field type="number" id="number" name="number"/>
                        <ErrorMessage name="number" component="div"/>   
                    </div>
                    {/* Date Field */}
                    <div>
                        <label htmlFor="date">Date: </label>
                        <Field type="date" id="date" name="date"/>
                        <ErrorMessage name="date" component="div"/>
                    </div>
                    {/* Radio group filed */}
                    <div role="group">
                        <label> <Field type="radio" name="radio" value="first"/>One</label>
                        <label> <Field type="radio" name="radio" value="second"/>Two</label>
                        <label> <Field type="radio" name="radio" value="third"/>Three</label>
                        <ErrorMessage name="radio" component="div"/>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default ReactFormikNew;