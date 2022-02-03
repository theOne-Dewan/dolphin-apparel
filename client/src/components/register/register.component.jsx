import React, { useState } from 'react';
import './register.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const Register = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordError, setPasswordError] = useState(false);

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        if (password !== confirmPassword){
            setPasswordError(true);
            setTimeout(() => {setPasswordError(false)}, 7000);
        } else {
            signUpStart({email, password, displayName});
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

    return(
        <div className='register'>
            <h2 className='title'>Not a member?</h2>
            <span className='prompt'>Please register as a new member</span>
            <form className='register-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required /> 
                {
                passwordError ? <span className="error">The Password does not match the Password Confirmation. Please try again.</span> : null
                }
                <CustomButton type='submit'>REGISTER</CustomButton>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);