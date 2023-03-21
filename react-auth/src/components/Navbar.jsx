import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  // pasang usLocation dari react-router-dom
  const location = useLocation()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser !== '' && storedUser !== null) {
      setIsLoggedIn(true)
      setUser(storedUser)
    } else {
      setIsLoggedIn(false)
      setUser(null)
    }
  }, [])
  // handleLogout
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    // alert('Anda telah logout!')
    // pasang toastify
    toast.info('Anda telah logout!')
    navigate('/')
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container my-2 '>
          <a className='navbar-brand' href='/'>
            Authorization
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  // gunakan location untuk menu home & profile
                  className={`nav-link ${
                    location.pathname === '/' ? 'active' : ''
                  } `}
                  aria-current='page'
                  href='/'
                >
                  Home
                </a>
              </li>

              {isLoggedIn && (
                <>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        location.pathname === '/profile' ? 'active' : ''
                      }`}
                      href='/profile'
                    >
                      Profile
                    </a>
                  </li>

                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      {user.name}
                    </a>
                    <ul className='dropdown-menu'>
                      <li>
                        <a
                          className='dropdown-item text-center'
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <li className='nav-item mx-2'>
                    <a className='btn btn-outline-light' href='/login'>
                      Login
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='btn btn-outline-light' href='/register'>
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
