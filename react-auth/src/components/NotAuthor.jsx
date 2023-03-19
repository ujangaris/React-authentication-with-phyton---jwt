import React from 'react'

const NotAuthor = () => {
  return (
    <div>
      <div
        className='container d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='card border-0 shadow-lg'>
              <div className='card-body text-center'>
                <h1 className='mb-4'>
                  You are not authorized to access this page.
                </h1>
                <p className='text-muted'>
                  Please <a href='/login'>login</a> to continue.
                </p>
                <a href='/login' className='btn btn-primary mt-3'>
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotAuthor
