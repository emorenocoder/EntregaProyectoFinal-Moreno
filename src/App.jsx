import React from 'react';
import CollapsibleExample from './assets/components/Navbar/Navbar';
import ItemListContainer from './assets/components/Items/ItemListContainer';
import ItemDetail from './assets/components/details/ItemDetail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <CollapsibleExample />
      <Routes>
      <Route path="/" exact component={<ItemListContainer/>} />
        <Route path="/detalle/:id" component={<ItemDetail/>} />
      </Routes>
      <ItemListContainer />
    </>
  );
};

export default App;

function Home() {
  return <h1>Esta es la página de inicio</h1>;
}

function Detalle() {
  return <h1>Detalles del elemento con ID: {id}</h1>;
}
