import React from 'react'
import './nav.css'
import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function Nav() {

const [show, setShow] = useState(false);

let history = useNavigate()

const transNavBar = () => {
if(window.scrollY> 150){
    setShow(true)
}else{
    setShow(false)

}
  

};




useEffect(() =>{
    window.addEventListener("scroll", transNavBar);
  
},[])

  return (
    <>
    <div className={`nav-wrapper ${show ? "nav-black" : ""}`}  >

<img className='logo' onClick={()=>{

history('/')
}

} src='https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0'/>

<img onClick={()=>{

history('/profle')


}} className='avtar' src='https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?pid=ImgDet&rs=1'></img>

    </div>
    
    </>
  )
}

export default Nav