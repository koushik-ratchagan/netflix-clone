import React from 'react'
import './loginscreen.css'
import { useState } from 'react'
import SignInScreen from '../components/SignInScreen';

function LoginScreen() {

const [signIn , setSignIn] = useState(false);




  return (
    <div className='login-sccreen'>

    
        <div className='login-background'>
            <img className='login-logo' src='https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0'></img>

               
               <button className='login-btn' onClick={() => setSignIn(true)}> sign in</button>

        </div>


<div className='background-gradient'></div>

<div className='login-body'>
{ signIn ? (
            <SignInScreen/>
        ):
        (

            <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        
        
            <div className='login-input'>
        
                <form>
                <input type="email" placeholder='email address'></input>
        
                <button className='login-getstarted' onClick={() => setSignIn(true)} >get started</button>
        
                </form>
        
            </div>
            
            </>



        )



        }





 


</div>
    </div>
  )
}

export default LoginScreen