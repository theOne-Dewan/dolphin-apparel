import React, { useState } from 'react';
import './login.styles.scss';
import FormInput from '../form-input/form-input.component';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const Login = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, serUserCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;
        serUserCredentials({...userCredentials, [name]: value});
    };

    return(
        <div className='login'>
            <h2 className='title'>Already a member?</h2>
            <span className='prompt'>Please log in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type='email'  name='email' label='Email' value={email} handleChange={handleChange} required/>
                <FormInput type='password' name='password' label='Password' value={password} handleChange={handleChange} required/>

                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(Login);