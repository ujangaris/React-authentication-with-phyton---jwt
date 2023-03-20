import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'

const Register = () => {
  // deklarasi hooks register
  const [register, setRegister] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    gender: '',
    city: '',
    phone_number: '',
    address: '',
    role: 'user',
  })
  // animation loading
  const [loading, setLoading] = useState(false)
  // pasang use navigate
  const navigate = useNavigate()

  // handleChangeInput
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }
  // handleRegister
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/register/user',
        register
      )
      console.log(response.data)
      alert('Register Berhasil')
      setLoading(false)
      navigate('/login')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  // handle ketika user sudah login tidak bisa masuk kehalaman Reegister
  useEffect(() => {
    // title register
    document.title = 'Register'
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 login-form '>
            <div className='card'>
              <div className='card-header text-center'>Register Form</div>
              <div className='card-body'>
                <form onSubmit={handleRegister}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          name='name'
                          value={register.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input
                          type='text'
                          className='form-control'
                          id='username'
                          name='username'
                          value={register.username}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          name='email'
                          value={register.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input
                          type='password'
                          className='form-control'
                          id='password'
                          name='password'
                          value={register.password}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='phone_number'>Phone Number:</label>
                        <input
                          type='tel'
                          className='form-control'
                          id='phone_number'
                          name='phone_number'
                          value={register.phone_number}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <select
                          id='city'
                          name='city'
                          value={register.city}
                          onChange={handleInputChange}
                          className='form-control'
                        >
                          <option>-- Select City --</option>
                          <option value='jakarta'>Jakarta</option>
                          <option value='bandung'>Bandung</option>
                          <option value='jogja'>Jogja</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <div className='form-check'>
                          <input
                            type='radio'
                            id='laki-laki'
                            name='gender'
                            value='laki-laki'
                            checked={register.gender === 'laki-laki'}
                            onChange={handleInputChange}
                            className='form-check-input'
                          />
                          <label
                            htmlFor='laki-laki'
                            className='form-check-label'
                          >
                            Laki-laki
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            type='radio'
                            id='wanita'
                            name='gender'
                            value='wanita'
                            checked={register.gender === 'wanita'}
                            onChange={handleInputChange}
                            className='form-check-input'
                          />
                          <label
                            htmlFor='wanita'
                            className='form-check-label my-2'
                          >
                            Wanita
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label htmlFor='phone_number'>Address</label>
                        <textarea
                          type='address'
                          name='address'
                          className='form-control'
                          id='address'
                          value={register.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-md-12 text-center'>
                      <button
                        type='submit'
                        className='btn btn-success btn-block w-100 mt-2'
                      >
                        {loading ? 'Loading...' : 'Register'}
                      </button>
                      <p className='mt-2'>
                        Sudah punya akun? <a href='/login'> Klik login</a>
                      </p>
                    </div>
                  </div>
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

export default Register
