import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector'
const Header = ({currentUser,hidden})=>(
    <div className='header'>
            <Link to="/" className='logo-container'>
        <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>فروشگاه</Link>
                <Link to='/contact' className='option'>تماس با ما</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin'>ورود به سایت</Link>
                }
                <CartIcon/>

            </div>
            { hidden?null :
                <Cart/>
            }
            
    </div>
);
const mapStateToProps =createStructuredSelector({
    currentUser:selectCurrentUser
    ,hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);