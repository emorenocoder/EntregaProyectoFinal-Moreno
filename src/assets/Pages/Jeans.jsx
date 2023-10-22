import React from 'react';
import ItemListContainer from '../components/Items/ItemListContainer';
import { useParams } from 'react-router';

const Jeans = () => {
  const params = useParams();
  return (
    <div>
      <ItemListContainer category="Jeans" />
    </div>
  );
}

export default Jeans;
