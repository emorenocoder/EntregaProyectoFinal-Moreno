import React from 'react'
import NavBar from './assets/components/Navbar/Navbar'
import CartContextProvider from './assets/Context/CartContext/cartContextProvider'
import RoutesComponent from './assets/Routes/routesComponent'
import UserContextProvider from './assets/Context/userContext/userContexProvider'
import Footer from './assets/components/Footer/Footer'


const App = () => {
  return (
    <>
    <div className="page-container">
    <div className= "content-wrap">
      <CartContextProvider>
        <UserContextProvider>
          <NavBar />
          <RoutesComponent />
        </UserContextProvider>
      </CartContextProvider>

      </div>
        <Footer />
      </div>
    </>
  )
}

export default App
