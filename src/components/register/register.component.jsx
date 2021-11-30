import React from 'react';
import './register.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

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

        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("The Password does not match the Confirm Password. Please retry.");
            return;
        };

        signUpStart({email, password, displayName});
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

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);