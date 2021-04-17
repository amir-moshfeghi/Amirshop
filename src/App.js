import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCartHidden} from './redux/cart/cart.selectors';
import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkoutPage.component'
class App extends React.Component{
  
  unsubscribedFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
          
          });
        
      }
      else {
        setCurrentUser(
         userAuth
        );
    }
    });
  }
  componentWillUnmount(){
    this.unsubscribedFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header/>
  
        <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' /> ): (<SignInAndSignUp/>)}/>
        <Route exact path='/checkout' component={CheckoutPage}/>

        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps =createStructuredSelector ({
  currentUser:selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
