import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import "react-rangeslider/lib/index.css";
import "./ResumeBuilder.css";
import Rangeslider from "react-rangeslider/lib/Rangeslider.js";

const ResumeBuilder = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [educationDetails, setEducationDetails] = useState([]);
  const [links, setLinks] = useState([]);
  const [image, setImage] = useState({});
  const [skillLevel_1, setSkillLevel_1] = useState(0);
  const [skillLevel_2, setSkillLevel_2] = useState(0);
  const [skillLevel_3, setSkillLevel_3] = useState(0);
  const [skill1, setSkill1] = useState();
  const [skill2, setSkill2] = useState();
  const [skill3, setSkill3] = useState();
  const [currentPage, setCurrentPage] = useState("basicInfo");

  const resumeRef = useRef();

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
      return alert("Please set a value for Skill 1");
    }
    if (!skillLevel_2) {
      return alert("Please set a value for Skill 2");
    }
    if (!skillLevel_3) {
      return alert("Please set a value for Skill 3");
    }

    setCurrentPage("preview");
  };
  // -----------------------Handle Back Button-----------------
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
      {/* ------------------------------Basic Info------------------------------- */}
      {currentPage === "basicInfo" && (
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="my-5 shadow-out p-5 col-lg-8">
            <div className="form-container">
              <Form onSubmit={handleBasicInfo}>
                <h1 className="textClip">
                  Let’s start with your header
                </h1>
                <p className="fs-3">
                  Include your full name and at least one way for employers to
                  reach you.
                </p>
                <Form.Group controlId="formImage">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    className="shadow-out"
                    onChange={(event) =>
                      setImage(URL.createObjectURL(event.target.files[0]))
                    }
                  />
                </Form.Group>
                <div className="form-inner-row">
                  <Form.Group controlId="formName" className="me-2">
                    <Form.Label>FIRST NAME</Form.Label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formName" className="ms-2">
                    <Form.Label>SURNAME</Form.Label>
                    <input
                      type="text"
                      name="lname"
                      className="form-control "
                      required
                    />
                  </Form.Group>
                </div>
                <Form.Group controlId="formName">
                  <Form.Label>PROFESSION</Form.Label>
                  <input
                    type="text"
                    name="profession"
                    className="form-control "
                    required
                  />
                </Form.Group>
                <div className="form-inner-row">
                  <Form.Group controlId="formName" className="me-2">
                    <Form.Label>CITY</Form.Label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formName"
                    className="ms-2"
                    style={{ width: "30%" }}
                  >
                    <Form.Label>PIN CODE</Form.Label>
                    <input
                      type="text"
                      name="pincode"
                      className="form-control "
                      required
                    />
                  </Form.Group>
                </div>
                <Form.Group controlId="formName">
                  <Form.Label>COUNTRY</Form.Label>
                  <input
                    type="text"
                    name="country"
                    className="form-control "
                    required
                  />
                </Form.Group>
                <div className="form-inner-row">
                  <Form.Group controlId="formName" className="me-2">
                    <Form.Label>PHONE</Form.Label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control "
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formName" className="ms-2">
                    <Form.Label>E-MAIL</Form.Label>
                    <input
                      type="text"
                      name="email"
                      className="form-control "
                      required
                    />
                  </Form.Group>
                </div>
                <Form.Group controlId="formName">
                  <Form.Label>About</Form.Label>
                  <input
                    type="text"
                    name="about"
                    className="form-control "
                    required
                  />
                </Form.Group>
                <Button type="submit" className="next-btn my-5 shadow-out">
                  Next
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      )}
      {/* ------------------------Education----------------- */}
      {currentPage === "education" && (
        <Row className="d-flex align-items-center justify-content-center my-5">
          <Col className="shadow-out p-5 col-lg-8" >
            <Form onSubmit={handleEducationDetailsSubmit}>
              <h1 className="textClip">Tell us about your education</h1>
              <p className="fs-3 ">
                Tell us about any colleges, vocational programs, or training
                courses you took. Even if you didn’t finish, it’s important to
                list them.
              </p>
              <Form.Group controlId="formDegree">
                <Form.Label>School Name </Form.Label>
                <input
                  type="text"
                  name="schoolName"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDegree">
                <Form.Label>School Course </Form.Label>
                <input
                  type="text"
                  name="schoolCourse"
                  className="form-control "
                  required
                  placeholder="ex:- NonMedical, Medical, Commerce, Arts etc."
                />
              </Form.Group>
              <Form.Group controlId="formDegree">
                <Form.Label>School Start Year</Form.Label>
                <input
                  type="text"
                  name="school_startyear"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDegree">
                <Form.Label>School End Year</Form.Label>
                <input
                  type="text"
                  name="school_endyear"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDegree">
                <Form.Label>College Name</Form.Label>
                <input
                  type="text"
                  name="collegeName"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCollege">
                <Form.Label>College Course</Form.Label>
                <input
                  type="text"
                  name="collegeCourse"
                  className="form-control "
                  required
                  placeholder="ex:- B.Tech , BCA, B.com etc."
                />
              </Form.Group>
              <Form.Group controlId="formStartYear">
                <Form.Label>College Start Year</Form.Label>
                <input
                  type="number"
                  name="startYear"
                  className="form-control "
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEndYear">
                <Form.Label>College End Year</Form.Label>
                <input
                  type="number"
                  name="endYear"
                  className="form-control "
                  required
                />
                <div className="buttonWrap my-3 d-flex">
                  <Button
                    className="next-btn mx-3  shadow-out"
                    onClick={handleBackButton}
                  >
                    Previous
                  </Button>
                  <Button type="submit" className="next-btn mx-3 shadow-out">
                    Next
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      )}
      {/* ---------------------Skills----------------- */}
      {currentPage === "skills" && (  
        <Row className="d-flex align-items-center justify-content-center mt-5">
          <Col className="shadow-out col-lg-8 p-5">
            <Form onSubmit={handleSkillsSubmit}>
              <h1 className="textClip ">
                Now, Mention Your Skills
              </h1>
              <Form.Group controlId="formSkill">
                <Form.Label>Skill 1</Form.Label>
                <input
                  type="text"
                  name="skill1"
                  className="form-control "
                  onChange={(e) => setSkill1(e.target.value)}
                  required
                />
                <Form.Label>
                  Skill Level :&nbsp;
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
                <input
                  type="text"
                  name="skill2"
                  className="form-control "
                  onChange={(e) => setSkill2(e.target.value)}
                  required
                />
                <Form.Label>
                  Skill Level :&nbsp;
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
                <input
                  type="text"
                  name="skill3"
                  className="form-control "
                  onChange={(e) => setSkill3(e.target.value)}
                  required
                />
                <Form.Label>
                  Skill Level :&nbsp;
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
                  onChange={(e) => setSkillLevel_3(e)}
                />
              </Form.Group>
              <span className="fs-4 text-grey" muted>
                More Skills ? Combine them !!
              </span>
              <div className="buttonWrap my-3 d-flex">
                <Button
                  className="next-btn mx-3  shadow-out"
                  onClick={handleBackButton}
                >
                  Previous
                </Button>
                <Button type="submit" className="next-btn mx-3 shadow-out">
                  Next
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      )}
      {/* ---------------------Links------------------ */}
      {currentPage === "links" && (
        <Row>
          <Col>
            <Form onSubmit={handleLinks}>
              <h1>Social Media Handles</h1>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>LinkedIn</Form.Label>
                <input type="text" name="linkedin" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>Twitter</Form.Label>
                <input type="text" name="twitter" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>Github</Form.Label>
                <input type="text" name="github" />
              </Form.Group>
              <Form.Group controlId="formSocialLinks">
                <Form.Label>E-mail</Form.Label>
                <input type="email" name="mail" required />
              </Form.Group>
              <Button onClick={handleBackButton}>Previous</Button>

              <Button type="submit">Next</Button>
            </Form>
          </Col>
        </Row>
      )}
      {/* ----------------------------------Preview----------------------------- */}
      {currentPage === "preview" && (
        <div className="">
          <div
            className="container previewContainer col-lg-9 col-sm-12"
            ref={resumeRef}
          >
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
                      className="in"
                    />
                    <Form.Label>{skill2}</Form.Label>
                    <Rangeslider
                      min={0}
                      max={100}
                      value={skillLevel_2}
                      className="in"
                    />
                    <Form.Label>{skill3}</Form.Label>
                    <Rangeslider
                      min={0}
                      max={100}
                      value={skillLevel_3}
                      className="in"
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
              <div className="col-7 resume_right_side">
                <div className="headerName">
                  <div className="fullName">
                    <div className="resume_fname">{basicInfo.fname}</div>
                    <div className="resume_lname">{basicInfo.lname}</div>
                  </div>
                  <div className="resume_profession">
                    {basicInfo.profession}
                  </div>
                  {/* <div className="resume_links my-4">
                    <a href={links.linkedin}>lin</a>
                    <a href={links.twitter}>lin</a>
                    <a href={links.github}>lin</a>
                    // <a href={links.mail}>lin</a>
                  </div> */}
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
          </div>
          <ReactToPrint
            trigger={() => {
              return <button className="fs-2 shadow-out p-3">Download</button>;
            }}
            content={() => resumeRef.current}
          />
        </div>
      )}
    </Container>
  );
};

export default ResumeBuilder;
