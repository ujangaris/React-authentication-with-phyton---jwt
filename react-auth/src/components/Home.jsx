import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container px-4 py-5'>
        <h2 className='pb-2 border-bottom'>React Authorization with API</h2>

        <div className='row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5'>
          <div className='col d-flex flex-column align-items-start gap-2'>
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

          <div className='col'>
            <div className='row row-cols-1 row-cols-sm-2 g-4'>
              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3'></div>
                <h4 className='fw-semibold mb-0'>Featured register</h4>
                <p className='text-muted'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3'></div>
                <h4 className='fw-semibold mb-0'>Featured Login</h4>
                <p className='text-muted'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3'></div>
                <h4 className='fw-semibold mb-0'>Featured Logout</h4>
                <p className='text-muted'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3'></div>
                <h4 className='fw-semibold mb-0'>Featured Profile</h4>
                <p className='text-muted'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
