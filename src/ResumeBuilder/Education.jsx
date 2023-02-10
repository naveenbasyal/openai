import React from "react";
import {  Row, Col, Form, Button } from "react-bootstrap";


const Education = (props) => {
  return (
    <Row>
      <Col>
        <Form onSubmit={props.handleEducationDetailsSubmit}>
          <h1>Tell us about your education</h1>
          <p>
            Tell us about any colleges, vocational programs, or training courses
            you took. Even if you didn’t finish, it’s important to list them.
          </p>
          <Form.Group controlId="formDegree">
            <Form.Label>School Name </Form.Label>
            <Form.Control type="text" name="schoolName" required />
          </Form.Group>
          <Form.Group controlId="formDegree">
            <Form.Label>School Course </Form.Label>
            <Form.Control
              type="text"
              name="schoolCourse"
              required
              placeholder="ex:- NonMedical, Medical, Commerce, Arts etc."
            />
          </Form.Group>
          <Form.Group controlId="formDegree">
            <Form.Label>School Start Year</Form.Label>
            <Form.Control type="text" name="school_startyear" required />
          </Form.Group>
          <Form.Group controlId="formDegree">
            <Form.Label>School End Year</Form.Label>
            <Form.Control type="text" name="school_endyear" required />
          </Form.Group>
          <Form.Group controlId="formDegree">
            <Form.Label>College Name</Form.Label>
            <Form.Control type="text" name="collegeName" required />
          </Form.Group>
          <Form.Group controlId="formCollege">
            <Form.Label>College Course</Form.Label>
            <Form.Control
              type="text"
              name="collegeCourse"
              required
              placeholder="ex:- B.Tech , BCA, B.com etc."
            />
          </Form.Group>
          <Form.Group controlId="formStartYear">
            <Form.Label>College Start Year</Form.Label>
            <Form.Control type="number" name="startYear" required />
          </Form.Group>
          <Form.Group controlId="formEndYear">
            <Form.Label>College End Year</Form.Label>
            <Form.Control type="number" name="endYear" required />
            <Button onClick={props.handleBackButton}>Previous</Button>
          </Form.Group>
          <Button type="submit">Next</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Education;
