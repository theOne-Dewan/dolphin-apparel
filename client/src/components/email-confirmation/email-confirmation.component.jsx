import React from 'react';
import { ConfirmationContainer } from './email-confirmation.styles';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const EmailConfirmation = () => (
    <ConfirmationContainer>
        <h2>Your email has been sent successfully.</h2>
        <Link to='/shop'><CustomButton>Continue Shopping</CustomButton></Link>
    </ConfirmationContainer>
);

export default EmailConfirmation;