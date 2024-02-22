import { React, useState } from 'react'
import Navbar from './Navbar'
import TicketForm from './TicketForm'
import Loginpage from './Loginpage'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ViewTickets from './ViewTickets'
import TicketDetails from './TicketDetails'
import Footer from './Footer'
import LoginRegister from './LoginRegister'
import HomePage from './HomePage'
import Layout from './Layout'

function Ticket () {
  // const [isLoggedIn, setLoggedIn] = useState(false)

  // const handleLogin = (username, password) => {
  //    username = 'MM12445'
  //    password = '12345'
  //   // perform api call to validate the login and setloggedin to true
  //   if (username === 'MM12445' && password === '12345') {
  //     setLoggedIn(true)
  //   } else {
  //     console.log('username: ' + username)
  //     console.log('password: ' + password)
  //       alert('Invalid username or password, please try again')
  //   }
  // }

  return (
    <div>
      <Navbar/>
        <BrowserRouter>
             <Routes>
              {/* <Route exact path='/' element={<Layout/>}> */}
              {/* <Route exact path='/smvalidation/login' component={Loginpage} /> */}
              <Route exact path='/smvalidation/login' component={LoginRegister} />
              <Route exact path='/smvalidation/ticket' component={TicketForm} />
              <Route exact path='/smvalidation/viewtickets' component={ViewTickets} />
              <Route exact path='/smvalidation/ticketdetails' component={TicketDetails} />
              {/* <Route path='/*' component={Loginpage} /> */}
               <Route path='/*' component={LoginRegister} />
              {/* </Route> */}
              </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default Ticket
