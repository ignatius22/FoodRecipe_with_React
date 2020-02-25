import React from 'react'
import {Col,Container,Row, Card, ListGroup, CardDeck,ListGroupItem} from 'react-bootstrap'

const Recipes = ({title, ingredientLines, image,ingredients}) => {
    return (
        <div>
            <Container >
            <Row>
                <Col xs={4}>

                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col xs={5}>
                <CardDeck >
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {ingredientLines}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default Recipes
