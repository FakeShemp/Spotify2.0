/**
 * This is a component which displays a single summary of
 * a playlist so the user can identify it easily.
 */

import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import './PlaylistListItemComponent.css'

class PlaylistListItemComponent extends Component {
    render() {
        const PlaylistName = "Playlist X"

        return (
            <Card>
                <Row>
                    <Col xs={3}>
                        <Image
                            className="PlaylistIcon"
                            src="http://placekitten.com/150/150"
                            alt="Playlist image"
                        />
                    </Col>
                    <Col className="my-auto">
                        <h5>{PlaylistName}</h5>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default PlaylistListItemComponent;