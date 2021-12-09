import React from 'react';
import { ConfirmationContainer } from './purchase-confirmation.styles';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const PurchaseConfirmation = () => (
    <ConfirmationContainer>
        <h2>Your Purchase was successful! Your confirmation number is <em>fin-{Math.random() * (9999999 - 1000000) + 1000000}</em></h2>
        <Link to='/shop'><CustomButton>Continue Shopping</CustomButton></Link>
    </ConfirmationContainer>
);

export default PurchaseConfirmation;