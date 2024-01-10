import React, { useState } from 'react'

const ReactBasicForm = () => {
    const [formState, setFormState] = useState({
        emailAddress: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: "",
    })
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({...prev, emailAddress: event.target.value}));
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({...prev, password: event.target.value, errorPassword: ""}));
        if(formState.password.length < 8 || formState.password.length > 16) {
            setFormState((prev) => ({...prev, errorPassword: "Password must be between 8 and 16 characters"}));
        }
    }
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({...prev, confirmPassword: event.target.value,}));
    }
    const handleShowPassword = () => {
        setFormState((prev) => ({...prev, showPassword: !prev.showPassword}));
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validate()) {
            return;
        }
    }
    const validate = () =>{
        let error = false;
        //Validate email
        if(!formState.emailAddress) {
            setFormState((prev) => ({...prev, errorEmail: "Email address is required"}));

            error = true;
        }else {
            setFormState((prev) => ({...prev, errorEmail: ""}));
            error = false;
        }
        //Validate email pattern
        const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if(!emailRegex.test(formState.emailAddress)) {
            setFormState((prev) => ({...prev, errorEmail: "Email address is invalid"}));

            error = true;
        }
        //Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})/;
        if(!passwordRegex.test(formState.password)) {
            setFormState((prev) => ({...prev, errorPassword: "Password is invalid"}));

            error = true;
        }
        if(!formState.password) {
            setFormState((prev) => ({...prev, errorPassword: "Password is required"}));

            error = true;
        }
        if(!formState.confirmPassword || formState.confirmPassword !== formState.password) {
            setFormState((prev) => ({...prev, errorConfirmPassword: "Confirm password must equal password"}));

            error = true;
        }else {
            setFormState((prev) => ({...prev, errorConfirmPassword: ""}));
            error = false;
        }

        return error;
    }
  return (
    <div style={{backgroundColor: "mediumseagreen",
    margin: "20px 0 20px",
    padding: "15px",
    }} className='container'>
        <h2>Registration new user</h2>
        <form autoComplete='off' onSubmit={handleSubmit}>
            {/* email address */}
            <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input type="text" id='email-address' className={`form-control ${formState.errorEmail ? "is-invalid" : ""}`} placeholder='Enter-email' value={formState.emailAddress} onChange={handleEmailChange} />
                {formState.errorEmail && <div className='text-danger'>{formState.errorEmail}</div>}
            </div>
            {/* password */}
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type={formState.showPassword ? "text" : "password"} id='password' className={`form-control ${formState.errorPassword ? "is-invalid" : ""}`} placeholder='Enter-password' value={formState.password} onChange={handlePasswordChange} />
            {formState.errorPassword && <div className='text-danger'>{formState.errorPassword}</div>}
            </div>
            {/* confirm password */}
            <div className='form-group'>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type={formState.showPassword ? "text" : "password"} id='confirm-password' className={`form-control ${formState.errorConfirmPassword ? "is-invalid" : ""}`} placeholder='Enter-confirm-password' value={formState.confirmPassword} onChange={handleConfirmPasswordChange} />
            {formState.errorConfirmPassword && <div className='text-danger'>{formState.errorConfirmPassword}</div>}
            </div>
            {/*  Toggle show/hide password */}
            <div className='form-group'>
                <label htmlFor='show-password'>Show Password</label>
                <input type="checkbox" id='show-password' className={`show-password`} placeholder='Enter-confirm-password' checked={formState.showPassword} onChange={handleShowPassword} />
            </div>
            <label htmlFor="show-password">Check to display password</label>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default ReactBasicForm