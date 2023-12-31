import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slicesredux/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

export const HomeScreens = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <>
          <h1>Últimos Productos</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
