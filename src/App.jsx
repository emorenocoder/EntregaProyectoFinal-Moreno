import React from 'react'
import CollapsibleExample from './assets/components/Navbar/Navbar'
import ItemListContainer from './assets/components/Items/ItemListContainer'
import { Route, Routes }  from 'react-router'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/detalle/:id' element={<detalle />}/>
      </Routes>
      <CollapsibleExample />
      <ItemListContainer />
    </>
    
  )
}

export default App

