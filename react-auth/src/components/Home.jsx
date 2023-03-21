import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import authentication from '../assets/images/undraw_authentication_re_svpt 11.png'
import online from '../assets/images/undraw_browsing_online_re_umsa 1.png'
import signup from '../assets/images/undraw_sign__up_nm4k 1.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container px-4 py-5'>
        <h2 className='pb-2 border-bottom'>React Authorization with API</h2>
        <div className='row'>
          <div className='col-md-5 d-flex justify-content-center align-items-center'>
            <div
              id='carouselExampleFade'
              className='carousel slide carousel-fade'
              data-bs-ride='carousel'
              data-bs-interval='3000'
            >
              <div className='carousel-inner mt-5 p-3'>
                <div className='carousel-item active'>
                  <img src={`${signup}`} className='d-block w-100' alt='...' />
                </div>
                <div className='carousel-item p-3'>
                  <img
                    src={`${authentication}`}
                    className='d-block w-100'
                    alt='...'
                  />
                </div>
                <div className='carousel-item p-3'>
                  <img src={`${online}`} className='d-block w-100' alt='...' />
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleFade'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleFade'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-7 mt-5'>
            <h3 className='fw-bold'>Welcome to Project 1</h3>
            <p className='text-muted'>
              Ini adalah aplikasi autentikasi yang dibangun dengan ReactJS dan
              menggunakan JSON Web Token (JWT) sebagai mekanisme otentikasi yang
              aman. Aplikasi ini juga menggunakan API yang dibangun dengan
              bahasa pemrograman Python untuk mengelola autentikasi pengguna dan
              otorisasi akses ke sumber daya yang terlindungi. Dengan JWT,
              aplikasi ini dapat memberikan pengalaman pengguna yang lebih aman
              dan terjamin privasinya.
            </p>
            <Link to='/register' className='btn btn-primary btn-lg'>
              Coba Kuyy!
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
