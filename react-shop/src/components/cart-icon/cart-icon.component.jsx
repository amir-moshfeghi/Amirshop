import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCoubt} from '../../redux/cart/cart.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect';
const CartIcon =({toggleCartHidden,itemCount})=> {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCoubt
    
});
const mapDispatchToProps = dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
