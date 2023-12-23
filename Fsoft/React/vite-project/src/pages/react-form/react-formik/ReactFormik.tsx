import React from "react";
import styles from "./ReactFormik.module.css";
import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
  FieldArrayRenderProps,
} from "formik";

interface UserForm {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  address: string;
  addressList: string[];
}
const ReactFormik = () => {
  const validate = (values: UserForm) => {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    let errors: any = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password is invalid";
    }
    if (!values.confirmPassword || values.confirmPassword !== values.password) {
      errors.confirmPassword = "Confirm password is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };

  const handleSubmit = (
    values: UserForm,
    formikHelper: FormikHelpers<UserForm>
  ) => {
    console.log(values);
    formikHelper.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        address: "",
        addressList: [] as string[],
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<UserForm>) => (
        <Form>
          {/* Email address */}
          <div className="form-group">
            <label htmlFor="email" className={styles.label}>
              Email Address
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email Address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          {/* password */}
          <div className="form-group">
            <label htmlFor="password" className={styles.label}>
              Password
              <Field
                type={formikProps.values.showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                placeholder="Enter Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          {/* confirm password */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
              <Field
                type={formikProps.values.showPassword ? "text" : "password"}
                name="confirmPassword"
                className="form-control"
                placeholder="Enter Confirm Password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          {/* show password */}
          <div className="form-group">
            <label htmlFor="showPassword" className={styles.label}>
              Show Password
              <Field
                type="checkbox"
                name="showPassword"
                className="form-control"
              />
            </label>
          </div>
          {/* address */}
          <div className="form-group">
            <label htmlFor="address" className={styles.label}>
              Address
              <Field
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </label>
          </div>
          {/* Address list */}
          <FieldArray name="addressList">
            {(arrayHelper: FieldArrayRenderProps) => (
              <div className="form-group">
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => arrayHelper.push("")}
                  >
                    {" "}
                    Address
                  </button>
                </div>
                {formikProps.values.addressList.map(
                  (address: string, index: number) => (
                    <div key={index}>
                      <label className="styles.label">
                        Address {index + 2}
                        <div className="d-flex align-items-center">
                          <Field
                            type="text"
                            name={`addressList[${index}]`}
                            className="form-control"
                          />
                          <button
                            className="btn btn-danger"
                            onClick={() => arrayHelper.remove(index)}
                          ></button>
                        </div>
                      </label>
                      <ErrorMessage
                        name={`addressList[${index}]`}
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </FieldArray>
          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="styles.label">
              Gender
              <Field as="select" name="gender" className="form-control">
                <option value="">Please select your gender </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </Field>
            </label>
          </div>

          {/* Submit */}
          <div className="form-group">
            <button
              type="submit"
              className={`btn btn-primary ${styles.button}`}
              disabled={!formikProps.isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReactFormik;
