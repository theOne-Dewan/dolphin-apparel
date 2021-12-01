import React, { useState } from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    const [addCartNotification, setAddCartNotification] = useState(false);

    const onClickHandler = () => {
        setAddCartNotification(true);
        setTimeout(() => {setAddCartNotification(false)}, 1300);
    };

    return(
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick={() => {addItem(item); onClickHandler()}}>Add to cart</CustomButton>
            {
                addCartNotification ? <span className="notification">Added to cart</span> : null
            }
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);