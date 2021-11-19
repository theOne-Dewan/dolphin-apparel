import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, cartTotal}) => (
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

        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal 
});

export default connect(mapStateToProps)(CheckoutPage);