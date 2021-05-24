import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signWithGoogle} from '../../firebase/firebase.utils';


export class SignIn extends Component {
    state = {
        email :'',
        password : ''
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }
        catch(error){
            console.log(error);

        }

        
    };
    handleChange = event =>{
        const {value,name} = event.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2> قبلا اکانت ساخته اید؟</h2>
                <span>ورود با ایمیل</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='ایمیل'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='پسوورد'/>
                    <div className='buttons'>
                    <CustomButton type='submit' >ورود</CustomButton>
                    <CustomButton  onClick={signWithGoogle} isGoogleSignIn>{''} ورود با گوگل {''} </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn

