import React from 'react'
import '../Components/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../Components/ContextReducer'

export default function Navbar() {

  const cart_data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    alert("LogOut")

    navigate('/');

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand btn btn-success" to="/">Epicure</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active btn-outline-success fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {
                (!localStorage.getItem("authToken")) ?
                  "" : <li className="nav-item">
                   <Link className="nav-link active btn-outline-success fs-5" aria-current="page" to="/MyOrder">MyOrder</Link>
                 </li>
              }

            </ul>
            <div>
            {
              (!localStorage.getItem("authToken")) ?
                <div className="d-flex">
                  <Link className="btn btn-outline-success m-2" type="submit" to='/SignUpPage'>SignIn</Link>
                  <Link className="btn btn-outline-success" type="submit" to='/Login'>Login</Link>
                </div> : <div className="d-flex">
                  <Link className="btn btn-outline-success m-2"  type="submit" to='/MyCart'>My Cart
                  <span className="badge text-bg-danger ">{cart_data.length}</span>
                  </Link>
                  <Link className="btn btn-outline-success" type="submit" onClick={handleLogout}  >LogOut</Link>
                </div>
            }
            </div>
          </div>
        </div>
      </nav>
    </>



  )
}
