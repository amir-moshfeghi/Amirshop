import React from 'react';
import './checkoutPage.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import {clearItem,addItem,removeItem} from '../../redux/cart/cart.actions';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
const CheckoutPage=({cartItems,total})=> (
     
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>

                </div>
                <div className='header-block'>
                    <span>Description</span>

                </div>
                <div className='header-block'>
                    <span>Quantity</span>

                </div>
                <div className='header-block'>
                    <span>Price</span>

                </div>
                <div className='header-block'>
                    <span>remove</span>

                </div>
                

            </div>
            {
                    cartItems.map(cartItem=><CheckoutItem key={cartItem.id}cartItem={cartItem}/>)
                }
                
            <div className='total'>
                    <span >total :${total}</span>
                </div>
        </div>
    
);
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
