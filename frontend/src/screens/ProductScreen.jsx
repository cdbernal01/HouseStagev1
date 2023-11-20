import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItemm} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct =async () => {
            const {data} =await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProduct();
    },[productId])

  return (
    <>
        <Link className="btn btn-ligth my-3" to="/">
            Volver Atras
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup.Item variant='flush'>
                    <h3>{product.name}</h3>             
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating}text={`${product.numReviews} reviews`}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
                <ListGroup.Item>Caracteristicas del producto: {product.description}</ListGroup.Item>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Precio:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>En Stock</Col>
                                <Col>
                                <strong>{product.countInStock >0 ? 'Disponible' : 'No Disponible'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item> 
                        <ListGroup.Item>
                            <Button
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}>
                                Agregar al Carrito  
                            </Button>
                        </ListGroup.Item> 
                    </ListGroup>

                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen