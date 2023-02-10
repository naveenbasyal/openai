import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Rangeslider from "react-rangeslider";

const Preview = (props) => {
  const {
    basicInfo,
    educationDetails,
    links,
    image,
    skill1,
    skill2,
    skill3,
    skillLevel_1,
    skillLevel_2,
    skillLevel_3,
  } = props;

  return (
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
      <Button onClick={props.handleBackButton}>Previous</Button>
    </div>
  );
};

export default Preview;
