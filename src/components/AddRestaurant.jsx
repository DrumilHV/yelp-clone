import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='mb-4'>
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className='form-control' placeholder='Name' />
          </div>
          <div className="col">
            <input type="text" placeholder='Location' className="form-control" />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2" >
              <option disabled>Price Range</option>
              <option value="1">₹ 100-1,000</option>
              <option value="2">₹ 1,000-5,000</option>
              <option value="3">₹ 5,000-10,000</option>
              <option value="4">₹ 10,000-50,000</option>
              <option value="5">₹ more than 50,000</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>

    </div>
  )
}

export default AddRestaurant