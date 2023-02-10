import React from 'react'
import {  Row, Col, Form, Button } from "react-bootstrap";

const Links = (props) => {
  return (
    <Row>
          <Col>
            <Form onSubmit={props.handleLinks}>
              <h1>Social Media Handles</h1>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" name="linkedin" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>Twitter</Form.Label>
                <Form.Control type="text" name="twitter" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>Github</Form.Label>
                <Form.Control type="text" name="github" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="mail" required />
              </Form.Group>
              <Button onClick={props.handleBackButton}>Previous</Button>

              <Button type="submit">Next</Button>
            </Form>
          </Col>
        </Row>
  )
}

export default Links