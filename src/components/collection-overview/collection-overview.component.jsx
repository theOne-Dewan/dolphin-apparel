import React from 'react';
import './collection-overview.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview  = ({collections, match}) => (
    <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (<CollectionPreview key={id} currentUrl={match.path} {...otherCollectionProps}/>))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStateToProps)(CollectionsOverview);