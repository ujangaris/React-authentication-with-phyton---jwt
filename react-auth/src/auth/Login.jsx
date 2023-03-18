import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'

const Login = () => {
  // deklarasi hooks
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // pasang handleLogin
  const handleLogin = async (e) => {
    e.preventDefault()
    // pasang setLoading untuk button
    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login/user',
        {
          username,
          password,
        }
      )
      //   inisialisasi  user dan token  agar lebih dipanggil
      const { user, token } = response.data.Data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      alert('Login Berhasil')
      setLoading(false)
      navigate('/')
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 login-form'>
            <div className='card'>
              <div className='card-header text-center'>Login Form</div>
              <div className='card-body'>
                <form onSubmit={handleLogin}>
                  <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className='form-group my-2'>
                    <label htmlFor='password'>Password:</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type='submit'
                    className='btn btn-success btn-block w-100'
                  >
                    {loading ? 'Loading...' : 'Login'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login
