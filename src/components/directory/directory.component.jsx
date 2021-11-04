import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'womens',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageSize: 'large'
                },
                {
                    id: 5,
                    title: 'mens',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageSize: 'large'
                }]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title,imageURL, imageSize}) => (
                        <MenuItem key={id} title={title} imageURL={imageURL} imageSize={imageSize}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
