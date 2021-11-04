import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, imageSize }) => (
    <div className={`menu-item ${imageSize}`}>
        <div className='background-image'
        style={{
                backgroundImage: `url(${imageURL})`
        }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;