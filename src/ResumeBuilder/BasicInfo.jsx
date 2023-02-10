import React from 'react'
import {  Row, Col, Form, Button } from "react-bootstrap";

const BasicInfo = (props) => {
  return (
    <Row>
    <Col>
      <Form onSubmit={props.handleBasicInfo}>
        <Form.Text>Let’s start with your header</Form.Text>
        <Form.Text>
          Include your full name and at least one way for employers to
          reach you.
        </Form.Text>
        <Form.Group controlId="formImage">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={(event) =>
              setImage(URL.createObjectURL(event.target.files[0]))
            }
          />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>FIRST NAME</Form.Label>
          <Form.Control type="text" name="fname" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>SURNAME</Form.Label>
          <Form.Control type="text" name="lname" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>PROFESSION</Form.Label>
          <Form.Control type="text" name="profession" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>CITY</Form.Label>
          <Form.Control type="text" name="city" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>COUNTRY</Form.Label>
          <Form.Control type="text" name="country" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>PIN CODE</Form.Label>
          <Form.Control type="text" name="pincode" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>PHONE</Form.Label>
          <Form.Control type="text" name="phone" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>E-MAIL</Form.Label>
          <Form.Control type="text" name="email" required />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>About</Form.Label>
          <Form.Control type="text" name="about" required />
        </Form.Group>

        <Button type="submit">Next</Button>
      </Form>
    </Col>
  </Row>
  )
}

export default BasicInfo