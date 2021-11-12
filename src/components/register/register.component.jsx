import React from 'react';
import './register.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Register extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Your Password does not match the Confirm Password. Please retry.");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error){
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='register'>
                <h2 className='title'>Not a member?</h2>
                <span>Please register as a new member</span>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required /> 

                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </div>
        )
    }
}

export default Register;