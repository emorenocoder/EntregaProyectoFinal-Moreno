import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { getData, getDocuments } from '../../Services/firebaseService';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
 
    useEffect( () => {
        const itemCollection = getDocuments("items")
        getData(itemCollection).then(data => setItems(data))

    }, [])
    return (
        <Container>
            <Row>
                {
                    items.length > 0 &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer

