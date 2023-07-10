import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    {/* Navigation bar Start*/}
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="">
        <img src="../favicon-32x32.png" alt="" width="auto" height="auto" className="d-inline-block align-text-top"/>
        </Link>
        {/* Title */}
        <Link className="navbar-brand" to="">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Nav Bar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.Mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.Mode === 'light'?'dark':'light'}Mode</label>
          </div>
      </div>
    </nav>
    {/* Navigation bar End */}
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: 'New Title',
    about: 'About'}
