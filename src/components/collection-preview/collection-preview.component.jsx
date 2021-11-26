import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleLink, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, currentUrl, routeName }) => (
    <CollectionPreviewContainer>
        <TitleLink to={`${currentUrl}/${routeName}`}>{title.toUpperCase()}</TitleLink>
        <PreviewContainer>
            {items
            .filter((item, idx) => idx <4)
            .map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;