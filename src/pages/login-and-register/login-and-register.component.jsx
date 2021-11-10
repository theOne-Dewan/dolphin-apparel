import React from 'react';
import './login-and-register.styles.scss';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

const LoginAndRegisterPage = () => (
    <div className='login-and-register'>
        <Login/>
        <Register/>
    </div>
);

export default LoginAndRegisterPage;