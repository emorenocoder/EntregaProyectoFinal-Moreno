import React from 'react';
import { Col } from 'react-bootstrap';
import CardItem from './CardItem';

const ItemList = ({ items }) => {
  const renderItems = () => {
    if (!items || items.length === 0) {
      return <div>No hay elementos para mostrar</div>;
    }

    return items.map((item) => (
      <Col md={4} lg={4} sm={12} key={item.id}>
        <CardItem item={item} />
      </Col>
    ));
  };

  return <>{renderItems()}</>;
};

export default ItemList;
