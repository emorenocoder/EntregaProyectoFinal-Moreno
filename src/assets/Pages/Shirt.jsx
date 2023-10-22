import React from 'react';
import ItemListContainer from '../components/Items/ItemListContainer';
import { useParams } from 'react-router';

const Shirt = () => {
  const params = useParams();
  return (
    <div>
      <ItemListContainer category="Polera" />
    </div>
  );
}

export default Shirt;
