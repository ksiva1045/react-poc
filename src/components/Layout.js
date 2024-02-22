import { useContext, React } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import LoginRegister from './LoginRegister'
import { AuthContext } from '../store/auth-context'

function Layout() {
  // const authCtx = useContext(AuthContext)
  // let authAwareLink = (
  //   <>
  //    <LoginRegister/>
  //   </>
  // )

  // if (authCtx.token) {
  //     authAwareLink = (
  //       <Footer/>
  //     )
  // }
  return (
    <div>
      <Navbar />
      <div style={{marginBottom:'5%'}}>
        <Outlet />
      </div>
      <Footer />
      {/* {authAwareLink} */}
    </div>
  )
}

export default Layout
