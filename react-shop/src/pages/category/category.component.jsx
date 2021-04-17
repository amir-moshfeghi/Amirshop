import React from 'react'
import moduleName from 'module'
import './category.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selectors'
const Categorypage = ({collection})=>{
    const {title,items} = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=>(<CollectionItem key={item.id} item={item} />))
            }

        </div>
        </div>);
};
const mapToStateProps =(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapToStateProps)(Categorypage);