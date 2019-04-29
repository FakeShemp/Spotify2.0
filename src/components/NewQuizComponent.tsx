import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './NewQuizComponent.css'

class NewQuizComponent extends Component {
    render() {
        return (
            <Card className="NewQuizButton" bg="success">
                <Card.ImgOverlay className="my-auto mx-auto text-center">
                    <Card.Title>New Quiz</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default NewQuizComponent;