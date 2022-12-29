import React,{useEffect,useState} from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000')

const HomePage = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        socket.emit('findAllMessage', {}, (response) => {
         setMessages([...response])
        })
    
        socket.on('message',(message) => {
          setMessages([...messages,message])
        }) 
      }, [])

  return (
    <div>

    </div>
  )
}
export default HomePage
