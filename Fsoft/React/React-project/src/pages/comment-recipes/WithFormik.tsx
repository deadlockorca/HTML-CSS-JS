import { ErrorMessage, Field, FormikProps, withFormik, Form } from "formik";

interface FormValues {
    name: string;
    email: string;
}

const LoginForm = (props: FormikProps<FormValues>) => {
    const {values, handleSubmit, handleChange, handleBlur} = props;

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <Field type='text' id='name' value={values.name} onChange={handleChange} onBur={handleBlur} />
                <ErrorMessage name='name' component={'div'} className="text-danger" />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <Field type='email' id='email' value={values.email} onChange={handleChange} onBur={handleBlur} />
                <ErrorMessage name='email' component={'div'} className="text-danger" />
            </div>
            <button type="submit">Submit</button>
        </Form>
    )
}

//Wrap form component with Formik

const EnhancedForm = withFormik< {}, FormValues> ({
    mapPropsToValues: () => ({name: '', email: ''}),

    //Define form validation
    validate: (values) => {
        const  error: { [key: string]: string} = {};
        if (!values.name) {
            error.name = 'Required';
        }
        if(!values.email) {
            error.email = 'Required';
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            error.email = 'Invalid email address';
        }
        return error;
    },
    //Define submission function
    handleSubmit: (values, {setSubmitting}) => {
        console.log('submited values', values);
        setSubmitting(false);
    }
})(LoginForm)

export default EnhancedForm;