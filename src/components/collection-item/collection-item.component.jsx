import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import {addItem} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
const CollectionItemt =({item,addItem})=> (
        <div className = 'collection-item'>
            <div className='image' style={{
                backgroundImage:`url(${item.imageUrl})`
            }}/>
                <div className='collection-footer'>
                    <span className='name'>{item.name}</span>
                    <span className='price'>${item.price}</span>
                </div>
                <CustomButton onClick = {()=>addItem(item)}inverted>اضافه به سبد خرید</CustomButton>

            </div>
        
    
);
const mapDispatchToProps = dispatch =>({
    addItem:item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItemt);
