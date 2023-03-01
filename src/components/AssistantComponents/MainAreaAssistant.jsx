import React from "react";
import { RotateSpinner, ImpulseSpinner } from "react-spinners-kit";
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
            <div className="userMessage">Hi There</div>
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
        <div className="bottom">
          <div className="input-group">
            <input
              className="jsf py-3 px-4"
              ref={inputRef}
              onChange={(e) => setUserInput(e.target.value)}
              value={transcript || userInput}
              placeholder="search anything . . ."
            />
            {userInput !== "" ? (
              <div
                class="clearBtn textClip px-5 fs-2 text-danger"
                onClick={clearInput}
              >
                <FaTimes />
              </div>
            ) : null}

            {/* --------------SendButton--------- */}
            <div
              className={`sendButton  p-4 text-color ${
                listening ? "link_active" : null
              }`}
              onClick={callApi}
            >
              {loading ? (
                <RotateSpinner size={25} color="#000" />
              ) : (
                <div className="textClip  px-3 fs-2 text-primary">
                  <FaTelegramPlane />
                </div>
              )}
            </div>
            {/* --------------Microphone--------- */}
            <div
              className={`microphone p-4 shadow-out text-color ${
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
        </div>
      </div>
    </>
  );
};

export default MainAreaAssistant;
