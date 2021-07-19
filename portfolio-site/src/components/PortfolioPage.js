import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <h1>Portfolio</h1>
    <p>Take a look at some of the recent works I have done</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
)

export default PortfolioPage