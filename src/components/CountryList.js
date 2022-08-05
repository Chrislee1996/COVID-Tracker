import React from 'react'
import {Dropdown,DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const CountryList = ()=> {


  return (
      <div>
        <NavLink to ={'/country/south-africa'}> 
        <h3>South Africa</h3>
        </NavLink>
    </div>
  )
}

export default CountryList