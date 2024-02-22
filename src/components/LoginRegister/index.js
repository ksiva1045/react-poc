import React, { useEffect, useState } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import { useAuth } from '../auth/AuthProvider'
import apiService from '../../services/api-service'
import { constants } from '../../services/service-constants'
import { useNavigate } from 'react-router-dom'

const LoginRegister = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const auth = useAuth()
  const [loginSuccess,setLoginSuccess] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {

    if (loginSuccess)
      navigate("/smvalidation/home");
  }, [loginSuccess])

  const handleSubmit = (event) => {
    event.preventDefault()
       if (isLoginForm) {
          login(event)
      } else {
          register()
      } 
  }

  const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const register = async (e) => {
    console.log('registration check')
    try {
      apiService.postRequestHandler(constants.REGISTER, JSON.stringify(formData))
        .then(res => {
          if (res) {
            auth.login(res.token);
            setLoginSuccess(true)
            console.log('Registration successful:', res)
          } else {
            console.log('Unable to fetch');
          }

        })
        .catch(err => {
            console.log(err)
        });
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  const login = async (e) => {
      console.log('login check')
        try {
        apiService.postRequestHandler(constants.LOGIN, JSON.stringify(formData))
          .then(res => {
            if (res) {
              auth.login(res.token);
              setLoginSuccess(true)
              navigate("/smvalidation/home");
            } else {
              console.log('Unable to fetch');
            }
  
          })
          .catch(err => {
              console.log(err)
          });
      } catch (error) {
        console.error('Login error:', error)
      }  
      
  }

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm)
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
        <form autoComplete='off'>
          <div className="form-group">
            <input type="text" placeholder="Email" onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" onChange={handleInputChange}/>
          </div>
          {!isLoginForm && (
            <div className="form-group">
              <input type="password" placeholder="Confirm password" />
            </div>
          )}
          <button type="submit" className='lgnbutton' onClick={handleSubmit}>{isLoginForm ? 'Login' : 'Register'}</button>
        </form>
        <p onClick={toggleForm} className="form-switch">
                {isLoginForm ? 'Register here' : 'Login here'}
        </p>
      </div>
    </div>
  )
}

export default LoginRegister
