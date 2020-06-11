import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function App() {
  const [decimal, setDecimal] = useState('')
  const [binary, setBinary] = useState('')

  function BinaryException(message) {
    this.message = message
    this.name = "BinaryException"
  }

  function clear() {
    setDecimal('')
    setBinary('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const regex = new RegExp("[0-1]+")
      if (!regex.test(binary)) {
        throw new BinaryException('Enter valid binary numbers.')
      }
      const response = await axios.get(`http://localhost:8000/api/v1/${binary}`)
      setDecimal(response.data.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Form onSubmit={handleSubmit}>
            <h1 className="my-5">Convert Binary to Decimal</h1>
            <Form.Control type="text" placeholder="Enter just 0's and 1's" onChange={e => setBinary(e.target.value)} value={binary} maxLength="8" />
            <Button variant="success" type="submit" className="btn-sm mt-1">
              Bin2Decimal
            </Button>
            <Button variant="secondary" type="button" className="btn-sm mt-1 ml-2" onClick={() => clear()}>Clear</Button>
          </Form>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <p>The decimal number is: <strong>{decimal === '' ? '' : decimal}</strong></p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
