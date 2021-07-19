import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
    <NavLink to="/portfolio" exact={true} activeClassName="is-active">Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </div>
)

export default Header