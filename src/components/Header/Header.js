import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav
      className="site-nav
                family-sans
                navbar
                navbar-expand-md
                text-uppercase
                navbar-dark
                fixed-top"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#site-nav-items"
          aria-controls="#site-nav-items"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand" to="/">
          Rohit Gupta
        </Link>
        <section className="collapse navbar-collapse" id="site-nav-items">
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link" to="/courses">
              Resume
            </Link>
            {/* <Link className="nav-item nav-link active" to="/">Blog</Link> */}
            <Link className="nav-item nav-link" to="/courses">
              Projects
            </Link>
            <Link className="nav-item nav-link" to="/courses">
              Contact
            </Link>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Header
