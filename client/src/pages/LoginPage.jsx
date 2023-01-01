import React,{useState} from 'react'

function LoginPage({setUser}) {
  const [joined,setJoined] = useState(false)
  const submitHandle = (e) => {
    e.preventDefault()
    localStorage.setItem('username', e.target.username.value)
    setUser(e.target.username.value)
    
  }
  return (
    <div className='flex justify-center items-center h-full'>
      <form onSubmit={submitHandle}>
        <input name='username' className='rounded-sm border' type="text" placeholder="place enter a name" />
      </form>
    </div>
  )
}

export default LoginPage