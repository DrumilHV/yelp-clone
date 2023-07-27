import React from 'react'

const RestaurantList = () => {
  return (
    <div className='list-group'>
      <table className="table table-striped table-dark table-hover">
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mac D</td>
            <td> Dehli</td>
            <td> ₹ 100-1000</td>
            <td>5 ⭐️</td>
            <td><button className="btn btn-primary">Edit </button> </td>
            <td><button className="btn btn-warning">Delete </button> </td>
          </tr>
          <tr>
            <td>Mac D</td>
            <td> Dehli</td>
            <td> ₹ 100-1000</td>
            <td>5 ⭐️</td>
            <td><button className="btn btn-primary">Edit </button> </td>
            <td><button className="btn btn-warning">Delete </button> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList