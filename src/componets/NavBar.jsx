import React from 'react'
import { navLinks } from '../constants'
const NavBar = () => {
  return (
    <header>
      <nav>
        <img src='/logo.svg' alt='Apple logo' />
        {/* create a tabs using ul tag */}
        <ul>
          {/* need map of list for tab values */}
          {
           navLinks.map(({ label }) => (
              <li key={label}>
                <a href={label}>{label}</a>

              </li>
            ))
          }
        </ul>
        {/* create a button */}
      <div className='flex-center gap-3'>
          <button>
          <img src='/search.svg' alt='Search' />
        </button>
        <button >
                 <img src="/cart.svg" alt="" />
        </button>
      </div>
      
      </nav>
    </header>
  )
}

export default NavBar
