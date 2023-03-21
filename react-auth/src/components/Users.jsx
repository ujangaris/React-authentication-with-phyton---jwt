import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function UsersData() {
  const [users, setUsers] = useState([])
  // hooks untuk seacrh
  const [query, setQuery] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('http://localhost:5000/list/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUsers(res.data.data))
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='conteiner m-3'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <h2 className='text-center'>Users Data</h2>
            <input
              type='text'
              placeholder='Search user .....'
              className='form-control my-4 w-25 mx-auto'
              // pasang on change
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <table className='table table-bordered'>
              <thead className='table-dark text-center'>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* pasang filter */}
                {users
                  .filter((person) => person.name.toLowerCase().includes(query))
                  .map((person, index) => (
                    <tr key={index} className='text-center'>
                      <td>{index + 1}</td>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>{person.username}</td>
                      <td>{person.address}</td>
                      <td>
                        <Link className='btn btn-outline-success'>Update</Link>
                        <button className='btn btn-outline-danger'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersData
