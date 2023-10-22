import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { getData, getDocuments } from '../../Services/firebaseService';

const ItemListContainer = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = getDocuments("items");

    getData(itemCollection).then((data) => {
      // Si se proporciona una categoría, filtra los elementos por esa categoría
      if (category) {
        const filteredItems = data.filter((item) => item.category === category);
        setItems(filteredItems);
      } else {
        // Si no se proporciona una categoría, muestra todos los elementos
        setItems(data);
      }
    });
  }, [category]);

  return (
    <Container>
      <Row>
        {items.length > 0 && <ItemList items={items} />}
      </Row>
    </Container>
  );
};

export default ItemListContainer;


