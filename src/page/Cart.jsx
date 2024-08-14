import React from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'

const Cart = () => {
    const { cart, addToCart, decrement } = useCartStore(); // Bir martalik destructuring
    const numOfProducts = cart.reduce((acc, c) => acc + c.numOfProducts, 0);

    return (
        <div>
            <Container>
                <div className="container py-5">
                    <Link to='/'>HOM</Link>
                    <Row className='mb-2'>
                        {cart.map((product) => (
                            <Col key={product.id} xs={8}>
                                <Card className='p-3 d-flex justify-content-between align-items-center'>
                                    <Card.Body>
                                        <div>
                                            <h3>{product.title}</h3>
                                            <p>{product.description}</p>
                                            <h4>{product.brand}</h4>
                                            <h3>{product.price}</h3>
                                        </div>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <Button className="btn-dark" onClick={() => decrement(product)}>-</Button>
                                            {product.numOfProducts}
                                            <Button className="btn-dark" onClick={() => addToCart(product)}>+</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Cart;
