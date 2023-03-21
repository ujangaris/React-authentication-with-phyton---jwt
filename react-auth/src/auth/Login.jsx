import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'
import imageLogin from '../assets/images/imageLogin.png'
import { Link } from 'react-router-dom'
const Login = () => {
  // deklarasi hooks
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // buat validasi username and password
  const validate = () => {
    let result = true
    if (username === '' || username === null) {
      result = false
      toast.warning('Please enter a Username')
    }
    if (password === '' || password === null) {
      result = false
      toast.warning('Please enter a Password')
    }
    return result
  }

  // pasang handleLogin
  const handleLogin = async (e) => {
    e.preventDefault()
    // panggil fungsi validasi
    const isValid = validate()
    if (isValid) {
      // pasang setLoading untuk button bernilai true
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
        // alert('Login Berhasil')
        // pasang toastyfy
        toast.success('Login Berhasil!')
        setLoading(false)
        navigate('/profile')
        // penambahan code untuk data yang tidak valid
      } catch (error) {
        if (error.response.status === 400) {
          setError('Invalid username or password')
          toast.error('Invalid username or password')
        } else {
          // jika kesalahan berasal dari API & bukan dari username & password
          setError(error.response.data.message)
          toast.error(error.response.data.message)
        }
        // pasang setLogin ketika user salah memasukan email atau password
        setLoading(false)
      }
    }
  }

  // hadnle ketika user sudah login tidak bisa akses halaman login
  useEffect(() => {
    // title login
    document.title = 'Login'
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='card shadow'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-5 ps-5'>
                    <img
                      src={imageLogin}
                      alt='Login Image'
                      style={{ width: '400px', height: '400px' }}
                    />
                  </div>
                  <div className='col-md-5 mx-5 mt-4'>
                    <form onSubmit={handleLogin} className='ms-5'>
                      <h1 className='mb-4'>Form Login</h1>
                      <div className='form-group '>
                        <label htmlFor='username'>Username:</label>
                        <input
                          type='text'
                          className='form-control'
                          id='username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
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
                        className='btn btn-success btn-block mt-4 w-100'
                      >
                        {loading ? 'Loading...' : 'Login'}
                      </button>
                      <Link
                        to='/register'
                        type='submit'
                        className='btn btn-default btn-outline-dark btn-block mt-4 w-100'
                      >
                        {loading ? 'Loading...' : 'Create new account'}
                      </Link>
                    </form>
                  </div>
                </div>
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
