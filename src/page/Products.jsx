import React from "react";
import { Card, Button, Col, Container, Row, Badge } from "react-bootstrap";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useProductStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  // numOfProducts ni hisoblash
  const numOfProducts = cart.reduce((acc, product) => acc + product.numOfProducts, 0);

  return (
    <Container className="py-5">
      <Badge bg='warning'>{numOfProducts}</Badge>
      <Link to="/cart">Corzinka</Link>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <Card.Body>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4>{product.brand}</h4>
                <h3>{product.price}</h3>
                <Button variant="dark" onClick={() => addToCart({...product, numOfProducts: 1})}>
                  ADD cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
