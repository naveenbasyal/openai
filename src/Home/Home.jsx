import "./Home.css";
import { FaTelegramPlane} from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [btnState, setbtnState] = useState(false);

  function changeClass() {
    if (btnState === true) {
      setbtnState(false);
    } else {
      setbtnState(true);
    }
  }
  let activeClass = btnState ? "link_active" : null;

  return (
    <div className="main_home row d-flex justify-content-center align-items-center">
      <div
        className="col-lg-10 col-sm-5 shadow-out mx-5"
        style={{ width: "37rem" }}
      >
        <div className="card-body py-3 px-4 text-center ">
          <div className="card-title display-1 fw-bolder mx-4 text-start">
            AI Chat/Voice Assistant
          </div>
          <p className="card-text  fs-2 text-white my-3">
            A large language model trained by&nbsp;
            <span className="textClip">OpenAI</span> to understand and respond
            to natural language inputs.
          </p>
          <Link
            to="/assistant"
            className={`link ${activeClass}`}
            onClick={changeClass}
          >
            Try it <FaTelegramPlane/>
          </Link>
        </div>
      </div>

      {/* -----------------Right Column-------------------- */}
      <div
        className="col-lg-10 col-sm-5  mx-5 shadow-out"
        style={{ width: "37rem" }}
      >
        <div className="card-body py-3 px-4 text-center ">
          <div className="card-title  fw-bold text-light mx-4 text-start">
            Text to Image Generator
          </div>
          <p className="card-text  fs-2 text-white my-3">
            Convert words to images in seconds with&nbsp;&nbsp;
            <span className="textClip">DALL-E 's</span> free AI image generator.
          </p>
          <Link
            to="/imageGenerator"
            className={`link ${activeClass}`}
            onClick={changeClass}
          >
            Try it <FaTelegramPlane />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
