import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jz9JTBKgrHdJZIMC1Q0Moi0aiIa6MpRxxYSSULDvKOCQdHOiFFFTRODlGtWiYNZqTdfxX6Eb7yauy9xnb80pxxo00uDjUghrq';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
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

export default StripeCheckoutButton;