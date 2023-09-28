import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import CounterContainer from '../Counter/countercontainer';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Col key={index} md={4} lg={4} xs={12}>
          <CardItem item={item} />
        </Col>
      ))}
    </>
  );
}

const CardItem = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Link to={`/detalle/${item.id}`}>
          <Button variant="primary">Ver Detalles</Button>
        </Link>
      </Card.Body>
      <CounterContainer />
    </Card>
  );
}

export default ItemList;
