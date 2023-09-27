import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = () => {
        fetch("http://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <Row>
                {loading ? (
                    <p>Cargando datos...</p>
                ) : error ? (
                    <p>Error al cargar datos: {error.message}</p>
                ) : (
                    <ItemList items={items} />
                )}
            </Row>
        </Container>
    );
}

export default ItemListContainer;
