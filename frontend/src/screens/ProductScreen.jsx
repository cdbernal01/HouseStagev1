import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slicesredux/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slicesredux/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link className="btn btn-ligth my-3" to="/">
        Volver Atrás
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup.Item variant="flush">
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Características del producto: {product.description}
            </ListGroup.Item>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
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
                      <strong>
                        {product.countInStock > 0
                          ? "Disponible"
                          : "No Disponible"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Cantidad</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Agregar al Carrito
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
