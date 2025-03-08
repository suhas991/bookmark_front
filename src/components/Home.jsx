import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">All-in-one Bookmark App</Card.Title>
              <Card.Text>
                <p>Welcome to the All-in-one Bookmark App! Organize your bookmarks efficiently and access them from anywhere.</p>
                <p>Features:</p>
                <ul>
                  <li>Real-time Sync</li>
                  <li>Smart Categories</li>
                  <li>Quick Search</li>
                  <li>Access Anywhere</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;