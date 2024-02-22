import { React, useState } from 'react'
import './style.css'
import TicketForm from '../TicketForm'
import { useAuth } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Loginpage () {
  const [success, setSuccess] = useState(false)
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    auth.login("Siva")
    navigate('/')
    try {
        // const response = await axios.post(LOGIN_URL,
        //     JSON.stringify({ user, pwd }),
        //     {
        //         headers: { 'Content-Type': 'application/json' },
        //         withCredentials: true
        //     }
        // );
        // console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response));
        setSuccess(true)
    } catch (err) {
      }
}
  return (
    <>
    {success ? (
        <TicketForm/>
    ) : (
    <div className='login-container'>
        <div className='login-box'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <input type='text'
                   placeholder='username'
                   className='input-field'
                   value={user}
                   onChange={(e) => setUser(e.target.value)}
                   required
              />
            <input type='password' placeholder='password' className='input-field'/>
            <button className='login-button'>Login</button>
            <button className='sso-button'>Single sign-on</button>
            </form>
        </div>
    </div>
  )}
  </>
  )
  }

export default Loginpage
