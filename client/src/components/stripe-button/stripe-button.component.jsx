import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions'; 

const StripeCheckoutButton = ({price, clearCart, history}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jz9JTBKgrHdJZIMC1Q0Moi0aiIa6MpRxxYSSULDvKOCQdHOiFFFTRODlGtWiYNZqTdfxX6Eb7yauy9xnb80pxxo00uDjUghrq';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            history.push('/confirmation');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please use the provided Test credit card');
        })

        clearCart();
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Fin Apparel Inc.'
            billingAddress
            shippingAddress
            image='https://cdn-icons-png.flaticon.com/512/74/74456.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);