import React from 'react';
import './login.styles.scss';
import FormInput from '../form-input/form-input.component';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error){
            console.error(error);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return(
            <div className='login'>
                <h2>Already a member?</h2>
                <span>Please log in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email'  name='email' label='Email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password' name='password' label='Password' value={this.state.password} handleChange={this.handleChange} required/>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;