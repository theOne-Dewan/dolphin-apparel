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
                    linkURL: 'hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    linkURL: 'jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    linkURL: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'womens',
                    linkURL: 'womens',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageSize: 'large'
                },
                {
                    id: 5,
                    title: 'mens',
                    linkURL: 'mens',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageSize: 'large'
                }]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
