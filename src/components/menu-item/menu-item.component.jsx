import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router';

const MenuItem = ({ title, imageURL, imageSize, linkURL, match, history }) => (
    <div className={`menu-item ${imageSize}`} onClick={() => history.push(`${match.url}${linkURL}`)}>
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

export default withRouter(MenuItem);