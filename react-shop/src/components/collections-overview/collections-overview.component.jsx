import React from 'react'
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'
import PreviewCollection from '../preview-collection/preview-collection.component'
const CollectionOverview = ({collections})=>(
    <div className='collections-overview'>
        {collections.map(({id,...collectionProps})=>(
                    <PreviewCollection key={id} {...collectionProps}/>
                ))}

    </div>

);
const mapStateToProps =  createStructuredSelector({
    collections:selectCollections
  });
  export default connect(mapStateToProps)(CollectionOverview);