import React from 'react';
import ItemListContainer from '../components/Items/ItemListContainer';
import { useParams } from 'react-router';

const Jacket = () => {
  const params = useParams();
  return (
    <div>
      <ItemListContainer category="Chaqueta" />
    </div>
  );
}

export default Jacket;
