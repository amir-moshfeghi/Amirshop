import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class Signup extends React.Component{
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',

    }
    handleSubmit=async event =>{
            event.preventDefault();
            const {displayName,email,password,confirmPassword} = this.state;
            if(password != confirmPassword){
                alert('password erroer match')
                return;
            }
            try{
const{user} = await auth.createUserWithEmailAndPassword(email,password)
await createProfileDocument(user,{displayName});
this.setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
});

            }
            catch(error){
                console.error(error)

            }
    };
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]: value
        });
    };
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
        <div className='sign-up'>
            <h2 className='title'>اکانت نساخته اید؟</h2>
            <form className='sign-up' onSubmit={this.handleSubmit}>
            <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='نام شما' required/>
            <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='ایمیل' required/>
            <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='پسوورد' required/>
            <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='تکرار پسورد' required/>

                
            <CustomButton type='submit'>ساخت اکانت</CustomButton>
            </form>
            
        </div>
        )
    }
}

export default Signup;