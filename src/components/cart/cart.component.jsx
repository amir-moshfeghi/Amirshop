import React from 'react';
import {connect} from 'react-redux'
import './cart.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
const Cart=({cartItems,history,dispatch})=> (
    
        <div className='cart-dropdown'>
            <div className='cart-items'>
                    {
                        cartItems.length ?
                        (cartItems.map(cartItem =><CartItem key={cartItem.id} item={cartItem}/>
                            ))
                            :<span className='empty-message'>your cart is empty</span>
                    }
                </div>
            <CustomButton onClick={
                ()=>{history.push('/checkout');
                dispatch(toggleCartHidden())}
                }>پرداخت</CustomButton>
        </div>
    );

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps)(Cart));
