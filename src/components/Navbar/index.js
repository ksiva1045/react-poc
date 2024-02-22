import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../store/auth-context'
import { useAuth } from '../auth/AuthProvider'

function Navbar () {
  const authCtx = useContext(AuthContext)

  function logoutHandler () {
  auth.logout();
  }
  const auth = useAuth();
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={require("../../img/mass-mutual-logo.png")}
          alt="Massmutual"
          title="logo"
        />
      </div>
      <div className="apptitle">
        <span>SM Tracker</span>
      </div>
      <div className="menu">
        {auth.getUser() && (
          <>
            <Link to="/smvalidation/ticket">Create Ticket</Link>
            <Link to="/smvalidation/viewtickets">View Tickets</Link>
            <Link to="/smvalidation/login" onClick={logoutHandler}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar
