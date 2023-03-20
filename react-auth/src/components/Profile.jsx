import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import NotAuthor from './NotAuthor'

const Profile = () => {
  // pasang deault endpoint
  const API_URL = 'http://localhost:5000'
  // hooks profile
  const [profile, setProfile] = useState({})
  // hooks authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // useEffect menampilkan data profile
  useEffect(() => {
    // pasang token yang login
    const token = localStorage.getItem('token')
    // pasang authenticated
    if (token) {
      setIsAuthenticated(true)
      axios
        .get(API_URL + '/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProfile(res.data.data)
          console.log(res.data)
        })
        .catch((err) => console.error(err))
    }
  }, [])
  // stitle profile = set document title to 'Profile' + name
  useEffect(() => {
    if (profile && profile.name) {
      document.title = 'Profile ' + profile.name
    }
  }, [profile])
  // tampilan untuk yang memaksa mengakses profile
  if (!isAuthenticated) {
    // import dan pasang NotAuthor
    return <NotAuthor />
  }

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className='card-body text-center'>
                {/* buat kondisi jika gambar  ada dan tidak ada pada database */}
                {profile.picture ? (
                  <img
                    src={`${API_URL}/static/uploads/users/${profile.picture}`}
                    alt='avatar'
                    className='rounded-circle img-fluid'
                    style={{ width: '200px', height: '200px' }}
                  />
                ) : (
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                    alt='avatar'
                    className='rounded-circle img-fluid'
                    style={{ width: '150px' }}
                  />
                )}
                <h5 className='my-3'>{profile.name}</h5>
                <p className='text-muted mb-1'>{profile.email}</p>
                <p className='text-muted mb-4'>{profile.address}</p>
                <div className='d-flex justify-content-center mb-2'>
                  <button
                    type='button'
                    className='btn btn-outline-primary ms-1'
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Full Name :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.name}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Username :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.username}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Gender :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.gender}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Email :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.email}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Phone :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.phone_number}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>City :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.city}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Role :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.role}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Address :</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{profile.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
