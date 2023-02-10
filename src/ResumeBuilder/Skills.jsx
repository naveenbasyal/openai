import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Rangeslider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Skills = (props) => {
  const [skillLevel_1, setSkillLevel_1] = useState(0);
  const [skillLevel_2, setSkillLevel_2] = useState(0);
  const [skillLevel_3, setSkillLevel_3] = useState(0);
  return (
    <Row>
      <Col>
        <Form onSubmit={props.handleSkillsSubmit}>
          <Form.Group controlId="formSkill">
            <Form.Label>Skill 1</Form.Label>
            <Form.Control
              type="text"
              name="skill1"
              onChange={(e) => setSkill1(e.target.value)}
            />
            <Form.Label>
              Skill Level :
              {skillLevel_1 == 0
                ? "Make a choice"
                : skillLevel_1 <= 20
                ? "Beginner"
                : skillLevel_1 > 20 && skillLevel_1 <= 40
                ? "Intermediate"
                : skillLevel_1 > 40 && skillLevel_1 <= 60
                ? "Good"
                : skillLevel_1 > 60 && skillLevel_1 <= 80
                ? "Very Good"
                : "Experienced"}
            </Form.Label>
            <Rangeslider
              min={0}
              max={100}
              value={skillLevel_1}
              onChange={(e) => setSkillLevel_1(e)}
            />

            <Form.Label>Skill 2</Form.Label>
            <Form.Control
              type="text"
              name="skill2"
              required
              onChange={(e) => setSkill2(e.target.value)}
            />
            <Form.Label>
              Skill Level :
              {skillLevel_2 == 0
                ? "Make a choice"
                : skillLevel_2 <= 20
                ? "Beginner"
                : skillLevel_2 > 20 && skillLevel_2 <= 40
                ? "Intermediate"
                : skillLevel_2 > 40 && skillLevel_2 <= 60
                ? "Good"
                : skillLevel_2 > 60 && skillLevel_2 <= 80
                ? "Very Good"
                : "Experienced"}
            </Form.Label>
            <Rangeslider
              min={0}
              max={100}
              value={skillLevel_2}
              onChange={(e) => setSkillLevel_2(e)}
            />
            <Form.Label>Skill 3</Form.Label>
            <Form.Control
              type="text"
              name="skill3"
              required
              onChange={(e) => setSkill3(e.target.value)}
            />
          </Form.Group>
          <Form.Label>
            Skill Level :{" "}
            {skillLevel_3 == 0
              ? "Make a choice"
              : skillLevel_3 <= 20
              ? "Beginner"
              : skillLevel_3 > 20 && skillLevel_3 <= 40
              ? "Intermediate"
              : skillLevel_3 > 40 && skillLevel_3 <= 60
              ? "Good"
              : skillLevel_3 > 60 && skillLevel_3 <= 80
              ? "Very Good"
              : "Experienced"}
          </Form.Label>
          <Rangeslider
            min={0}
            max={100}
            value={skillLevel_3}
            onChange={(value) => setSkillLevel_3(value)}
          />
          <Form.Text muted>More Skills ? Combine them !!</Form.Text>
          <Button onClick={props.handleBackButton}>Previous</Button>

          <Button type="submit">Next</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Skills;
