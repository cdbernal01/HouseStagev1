import React from 'react'
import { useEffect, useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';



export const HomeScreens = () => {
  const [products, setProducs] =useState([])

  useEffect(()=>{
    const fetchProducts = async () =>{
      const { data } = await axios.get('/api/products');
      setProducs( data );
    };

    fetchProducts();
  }, []);

  return (
    <>
        <h1>Ultimos Productos</h1>
        <Row>
            {products.map((product) =>(
                <Col key={product._id} sm={12} md={6} lg={4} cl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>

  )
}
