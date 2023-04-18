import React from "react";
import {
  RotateSpinner,
  ImpulseSpinner,
  PulseSpinner,
} from "react-spinners-kit";
import { FaTelegramPlane, FaTimes, FaMicrophone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainAreaAssistant = ({
  responseContainerRef,
  transcript,
  speak,
  loading,
  message,
  userInput,
  clearInput,
  callApi,
  listening,
  setUserInput,
  SpeechRecognition,
  inputRef,
  error,
}) => {
  return (
    <>
      <div className="chatAssitant">
        <div className="response container-fluid" ref={responseContainerRef}>
          <ToastContainer position="bottom-right" />
          <div className="fs-3 user shadow-out my-2 mx-2">
            <div className="userImage">
              <img src="/images/user.png" alt="userImage" />
            </div>
            <div className="userMessage d-flex align-items-center">
              Hi There
            </div>
          </div>
          <div className="fs-3 user my-5 mx-2">
            <div className="userImage">
              <img src="/images/bot.png" alt="botImage" />
            </div>
            <div className="userMessage">Search anything...</div>
          </div>
          {message.map((item, index) => (
            <div key={index}>
              <div className="fs-3 user shadow-out my-2 mx-2">
                <div className="userImage">
                  <img src="public\images\user.png" alt="userImage" />
                </div>
                <div className="userMessage">
                  {item.userInput || transcript}
                </div>
              </div>
              <div className="fs-3 bot">
                <div className="botImage">
                  <img src="public\images\bot.png" alt="botImage" />
                </div>
                <div className="botMessage">
                  {item.response.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------Input Field----------- */}
        <div className="bottom mx-2">
          <div
            className={`row ${
              window.innerWidth > 500 && "mx-5 px-5"
            } justify-content-center align-items-center`}
          >
            <div className="col-10 col-lg-8 d-flex">
              <input
                className="jsf py-3  fs-3 form-control"
                ref={inputRef}
                onChange={(e) => setUserInput(e.target.value)}
                value={transcript || userInput}
                placeholder="search anything . . ."
              />
              {userInput !== "" ? (
                <div
                  class="textClip d-flex ps-3 pointer align-items-center justify-content-center fs-2 text-danger"
                  onClick={clearInput}
                >
                  <FaTimes />
                </div>
              ) : null}
            </div>

            <div className="col-2 col-lg-1 d-flex align-items-center justify-content-center">
              {/* --------------SendButton--------- */}
              <div
                className={`sendButton pointer  p-3 text-color ${
                  listening ? "link_active" : null
                }`}
                onClick={callApi}
              >
                {loading ? (
                  <span className="textClip fs-2  text-primary ">
                    <PulseSpinner size={30} color="black" />
                  </span>
                ) : (
                  <span className="textClip shadow-out px-4 py-3 fs-2 roundedBorder text-primary">
                    <FaTelegramPlane />
                  </span>
                )}
              </div>
            </div>

            {/* --------------Microphone--------- */}
            {window.innerWidth > 500 && (
              <div className="col-lg-1 center">
                <div
                  className={`microphone shadow-out p-3 roundedBorder text-color ${
                    listening ? "link_active" : null
                  }`}
                  onClick={SpeechRecognition.startListening}
                  disabled={listening}
                >
                  {listening ? (
                    <ImpulseSpinner size={20} color="red" />
                  ) : (
                    <div className="textClip fs-2  mx-2 mic text-dark">
                      <FaMicrophone />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAreaAssistant;
