import React from 'react';
import './login.styles.scss';
import FormInput from '../form-input/form-input.component';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    render() {
        return(
            <div className='login'>
                <h2>Already a member?</h2>
                <span>Please log in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name="password" type="password" label='password' value={this.state.email} handleChange={this.handleChange} required/>

                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;