import React,{useEffect,useState} from 'react'
import { io, Socket } from 'socket.io-client'

const HomePage = ({user}) => {
    const [messages, setMessages] = useState([])
    const [joined, setJoined] = useState([])
    const [messageText,setMessageText] = useState()
    const socket = io('http://localhost:3000')
    useEffect(() => {
        socket.emit('findAllMessage', {}, (response) => {
         setMessages([...response])
        })
    
        socket.on('message',(message) => {
          setMessages([...message])
        })

      }, [])
      const sendMessage = (e) => {
        e.preventDefault()
        socket.emit('createMessage',{name:localStorage.getItem('username'),message:e.target.inputBox.value}, () => {
          setMessageText('')
        })
        e.target.inputBox.value = ""
      } 
      const joineds = (e) => {
        e.preventDefault()
        io.emit('join', {name: localStorage.getItem('username')}, () => {
          setJoined(true)
        })
      }

  return (
    <div>
      <div>
      {
  messages ?  messages.map((item,index) => 
    (
      <div className='flex' key={index}>
       <div className='pr-3'>
       <p>[{item.name}]:</p>
       </div>
       <div>
       <p>{item.message}</p>
       </div>
      </div>
    )
  ):null
}
    </div>
      <form onSubmit={sendMessage}>
        <input name='inputBox' className='rounded-sm border w-96, h-9' type="text" placeholder="please enter your text"
        />
      </form>
    </div>
  )
}
export default HomePage
