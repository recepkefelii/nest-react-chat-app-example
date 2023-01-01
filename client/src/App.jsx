import { useState,useEffect } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  const [user,setUser] = useState('')
  useEffect(() => {
    if(localStorage.getItem('username')){
      setUser(localStorage.getItem('username'))
    }
    else{
      
    }
  }, [user])
 if(user){
   return (
     <Routes>
       <Route path='/' element={<HomePage user={user} setUser={setUser} />} />
     </Routes>
   )
 }
  else{
    return (
      <Routes>
        <Route path='/' element={<LoginPage setUser={setUser} />} />
      </Routes>
    )
  }
}

export default App
