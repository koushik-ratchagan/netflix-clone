import React, { useEffect } from 'react';
import Homepage from './page/Homepage';
import { BrowserRouter, Routes, Route ,} from "react-router-dom";
import LoginScreen from './page/LoginScreen';
import { auth } from './fireBase';
import {onAuthStateChanged} from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './page/ProfilePage';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() =>{
   

   const unsuscribe = onAuthStateChanged(auth , (userAuth) =>{

      if(userAuth){

   
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,

        }))


      }else{
        //logout
        dispatch(logout())
      }
      

    })

return unsuscribe
  }, [dispatch])


  return (
    
    <div className="App">
   
   

 <BrowserRouter>
      <Routes>
            {!user ? 
            (<Route exact path="/" element={<LoginScreen/>}/>) :

            (   
              
              
              <Route exact path="/" element={<Homepage/>}/>  
          )
            
            }
  

  <Route   path="/profle" exact element={<ProfilePage/>}/> 

     
      
      </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;



