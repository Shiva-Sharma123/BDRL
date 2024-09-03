import React from 'react'

const Navbar = () => {
  return (
          <div className="main1">
            <h3>Dashboard</h3>
            <ul>
              <li>
              <input type="text" placeholder="Search" className='navbar_input'/>
              </li>
              <li className='navbaricon'><i class="fa-regular fa-bell"></i></li>
              <li>
                  <button><i class="fa-regular fa-user"></i>Hello Admin</button>
              </li>
            </ul>
          </div>
  )
}

export default Navbar