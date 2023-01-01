import { useState,useEffect } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  const [messageText, setMessageText] = useState('')
  const [joined, setJoined] = useState(false)
  const [name, setName] = useState('')
  const [typingDisplay, setTypingDisplay] = useState('');

  const sendMessage = () => {
    socket.emit('createMessage', {message: messageText}, () => {
      setMessageText('')
    } )
  }

  const join = () => {
    socket.emit('join', {name: name}, () => {
      setJoined(true)
    })
  }
  let timeout;
  const typing = () => {
    socket.emit('typing', {isTyping: true}, () => {
     timeout = setTimeout(() => {
        socket.emit('typing', {isTyping: false}), 2000
     })
    })
  }
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
