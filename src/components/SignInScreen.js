import React from 'react'
import "./signinScreen.css";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut,signInWithEmailAndPassword} from "firebase/auth"
import { useRef } from 'react';
import { auth } from '../fireBase';



function SignInScreen() {

    const emailRef = useRef(null);
    const PasswordRef = useRef(null);

const register = async (e)=>{
  e.preventDefault()


  try{
    const user = await createUserWithEmailAndPassword(  auth , emailRef.current.value , PasswordRef.current.value )
  
    console.log(user)
  }catch(error){
  
    alert(error.message)
  }
  



};

const signIn =  async (e)=>{
    e.preventDefault()

    
  try{
    const user = await signInWithEmailAndPassword(  auth , emailRef.current.value , PasswordRef.current.value )
  
    console.log(user)
  }catch(error){
  
    alert(error.message)
  }
  
  
  };

  return (
    <div className='signup-screen'> 

    <h1>sign in</h1>
    <form>
    <input ref={emailRef} placeholder='Email' type="email"/>

    <input ref={PasswordRef} placeholder='Password' type="password"/>

    <button className='sign-in-btn' onClick={signIn} type='submit'>sign in</button>
 <p> <span className='signup-grey' >new to netflix?</span> <span className='signup-link' onClick={register}>sign up now</span></p>

    </form>
    
    </div>
  )
}

export default SignInScreen