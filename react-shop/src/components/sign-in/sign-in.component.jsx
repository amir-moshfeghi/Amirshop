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
                <h2> already have an account</h2>
                <span>sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password'/>
                    <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton  onClick={signWithGoogle} isGoogleSignIn>{''} sign in with google {''} </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn

