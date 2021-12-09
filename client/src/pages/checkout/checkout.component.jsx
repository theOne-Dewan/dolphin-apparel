import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, cartTotal, history}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

        <div className='total'>TOTAL: ${cartTotal}</div>
        <div className='test-warning'>
            *Please use a test/imaginary name+email and the following test credit card info for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotal} history={history}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal 
});

export default connect(mapStateToProps)(CheckoutPage);