import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice'
import {signOut} from 'firebase/auth'
import { auth } from '../fireBase'
import { useNavigate, } from 'react-router-dom'
import './profilScreen.css'





function ProfilePage() {
const logout = useNavigate()
const user = useSelector(selectUser)

console.log(user)




   return (
    <div className='profile'> 

    <Nav></Nav>

    <div className='profile-body'>
        <h1> Edit Profile</h1>

        <div className='profile-info'>
            <img src='https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?pid=ImgDet&rs=1' alt=""></img>

            <div className='profile-details'>
        
         <div className='profile-screen-plans'>
<h2>{user?.email}</h2>


<button onClick={async (e)=>{
  e.preventDefault()
await signOut(auth)

logout("/")



}} className='btn btn-sign-out' >sign out</button>



         </div>



          



            </div>




        </div>



    </div>
        
        
        
          </div>
  )
}

export default ProfilePage