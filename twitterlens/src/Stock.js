import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Grid} from 'react-bootstrap';

function Stock() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the TwitterLens Stock Analytics Page
        </p>
        <Form>
            <Row>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Please enter a company name:  </Form.Label>
                    <Form.Control type="tick" placeholder="ex. Apple"/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Row>
        </Form>
      </header>
    </div>
  );
}

export default Stock;