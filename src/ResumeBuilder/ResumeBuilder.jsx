import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import Rangeslider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./ResumeBuilder.css";
import "react-quill/dist/quill.snow.css";

const ResumeBuilder = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [educationDetails, setEducationDetails] = useState([]);
  const [links, setLinks] = useState([]);
  const [image, setImage] = useState({});
  const [description, setDescription] = useState("");
  const [currentPage, setCurrentPage] = useState("links");
  const [skillLevel_1, setSkillLevel_1] = useState(0);
  const [skillLevel_2, setSkillLevel_2] = useState(0);
  const [skillLevel_3, setSkillLevel_3] = useState(0);
  const [skill1, setSkill1] = useState();
  const [skill2, setSkill2] = useState();
  const [skill3, setSkill3] = useState();

  // --------------------Basic Info and Image----------------
  const handleBasicInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    setBasicInfo({
      fname: form.fname.value,
      lname: form.lname.value,
      profession: form.profession.value,
      city: form.city.value,
      country: form.country.value,
      pincode: form.pincode.value,
      phone: form.phone.value,
      email: form.email.value,
      about: form.about.value,
      image: image,
    });
    setCurrentPage("education");
  };

  // ----------------Education Section-------------
  const handleEducationDetailsSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setEducationDetails({
      schoolName: form.schoolName.value,
      schoolCourse: form.schoolCourse.value,
      school_startyear: form.school_startyear.value,
      school_endyear: form.school_endyear.value,
      collegeName: form.collegeName.value,
      collegeCourse: form.collegeCourse.value,
      startYear: form.startYear.value,
      endYear: form.endYear.value,
    });
    setCurrentPage("skills");
  };
  // ------------------Social Links--------------
  const handleLinks = (event) => {
    event.preventDefault();
    const form = event.target;
    setLinks({
      linkedin: form.linkedin.value,
      twitter: form.twitter.value,
      github: form.github.value,
      mail: form.mail.value,
    });
    setCurrentPage("preview");
  };

  // ------------------Skills--------------
  const handleSkillsSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!skillLevel_1) {
      return alert("Please set a Skill Level for Skill 1");
    }
    if (!skillLevel_2) {
      return alert("Please set a Skill Level for Skill 2");
    }
    if (!skillLevel_3) {
      return alert("Please set a Skill Level for Skill 3");
    }
    setCurrentPage("preview");
  };

  const handleBackButton = () => {
    if (currentPage === "preview") {
      setCurrentPage("links");
    } else if (currentPage === "links") {
      setCurrentPage("skills");
    } else if (currentPage === "skills") {
      setCurrentPage("education");
    } else if (currentPage === "education") {
      setCurrentPage("basicInfo");
    }
  };

  return (
    <Container>
      {currentPage === "basicInfo" && (
        <Row>
          <Col>
            <Form onSubmit={handleBasicInfo}>
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
      )}
      {currentPage === "education" && (
        <Row>
          <Col>
            <Form onSubmit={handleEducationDetailsSubmit}>
              <h1>Tell us about your education</h1>
              <p>
                Tell us about any colleges, vocational programs, or training
                courses you took. Even if you didn’t finish, it’s important to
                list them.
              </p>
              <Form.Group controlId="formDegree">
                <Form.Label>School Name </Form.Label>
                <Form.Control
                  type="text"
                  name="schoolName"
                  required
                />
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
                <Button onClick={handleBackButton}>Previous</Button>
              </Form.Group>
              <Button type="submit">Next</Button>
            </Form>
          </Col>
        </Row>
      )}
      {currentPage === "skills" && (
        <Row>
          <Col>
            <Form onSubmit={handleSkillsSubmit}>
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
              <Button onClick={handleBackButton}>Previous</Button>

              <Button type="submit">Next</Button>
            </Form>
          </Col>
        </Row>
      )}
      {currentPage === "links" && (
        <Row>
          <Col>
            <Form onSubmit={handleLinks}>
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
              <Button onClick={handleBackButton}>Previous</Button>

              <Button type="submit">Next</Button>
            </Form>
          </Col>
        </Row>
      )}
      {/* ----------------------------------Preview----------------------------- */}
      {currentPage === "preview" && (
        <div className="container previewContainer col-lg-7 col-sm-12">
          <Row className="border my-5 shadow-out">
            {/* --------------Left Side--------- */}
            <div className="col-5 resume_left_side ">
              <div className="profileImage text-center">
                <img
                  src={basicInfo.image}
                  className="shadow-out"
                  alt="profileImg"
                />
              </div>
              <div className="resume_about">
                <h4>ABOUT</h4>
                {basicInfo.about}
              </div>
              <div className="resume_skills">
                <div className="innerSkills">
                  <h4 className="text-start">SKILLS</h4>
                  <Form.Label>{skill1}</Form.Label>
                  <Rangeslider
                    min={0}
                    max={100}
                    value={skillLevel_1}
                    className="shadow-in"
                  />
                  <Form.Label>{skill2}</Form.Label>
                  <Rangeslider
                    min={0}
                    max={100}
                    value={skillLevel_2}
                    className="shadow-in"
                  />
                  <Form.Label>{skill3}</Form.Label>
                  <Rangeslider
                    min={0}
                    max={100}
                    value={skillLevel_3}
                    className="shadow-in"
                  />
                </div>
              </div>
              <div className="resume_contact flex-start">
                <h4>Contact</h4>
                <i class="fa fa-solid fa-mobile-screen-button px-3 ">
                  <span className="mx-3">{basicInfo.phone}</span>
                </i>
                <i class="fa fa-solid fa-envelope px-3">
                  <span className="mx-3">{basicInfo.email}</span>
                </i>
                <i class="fa-solid fa-location-dot px-3">
                  <span className="mx-3">
                    {basicInfo.city}, {basicInfo.country}
                  </span>
                </i>
                <i class="fa-sharp fa-regular fa-earth-americas px-3">
                  <span className="mx-3">{basicInfo.pincode}</span>
                </i>
              </div>
            </div>
            {/* ------------Right Side-------- */}
            <div className="col-6 resume_right_side">
              <div className="headerName">
                <div className="resume_fname">{basicInfo.fname}</div>
                <div className="resume_lname">{basicInfo.lname}</div>
                <div className="resume_profession">{basicInfo.profession}</div>
                <div className="resume_links">
                  <a href={links.linkedin}>lin</a>
                  <a href={links.twitter}>lin</a>
                  <a href={links.github}>lin</a>
                  <a href={links.mail}>lin</a>
                </div>

              </div>
              <div className="resume_education">
                <h4>Education</h4>
                <div className="resume_school d-flex">
                  <span className="year">
                    {educationDetails.school_startyear}-
                    {educationDetails.school_endyear}
                  </span>
                  <span className="holder">
                    <span className="courseName">
                      {educationDetails.schoolCourse}
                    </span>
                    <span className="collegeName">
                      {educationDetails.schoolName}
                    </span>
                  </span>
                </div>
                <div className="resume_school d-flex">
                  <span className="year">
                    {educationDetails.startYear}-{educationDetails.endYear}
                  </span>
                  <span className="holder">
                    <span className="courseName">
                      {educationDetails.collegeCourse}
                    </span>
                    <span className="collegeName">
                      {educationDetails.collegeName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Row>
          <Button onClick={handleBackButton}>Previous</Button>

        </div>
      )}
    </Container>
  );
};

export default ResumeBuilder;
