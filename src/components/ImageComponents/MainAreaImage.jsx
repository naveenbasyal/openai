import React from "react";
import { RotateSpinner, ImpulseSpinner } from "react-spinners-kit";
import { FaMicrophone, FaTimes } from "react-icons/fa";

const MainAreaImage = ({
  inputRef,
  setuserPrompt,
  transcript,
  userPrompt,
  handleClear,
  listening,
  SpeechRecognition,
  generateImage,
  loading,
  error,
  overlay,
  imageUrl,
  setLoading,
}) => {
  return (
    <>
      <div className="row imageGenerator_main ">
        <div className="main_data col-lg-7 col-sm-7 mx-5 mt-5 px-5">
          {/* ---------------App Heading------------------- */}
          <div className="text-color heading_image ">
            <span>Text to Image Generator using</span>&nbsp;
            <span className="textClip">"DALL-E"</span>
          </div>
          {/* -------------------App Information */}
          <div className="jsf app_info ">
            Convert words to images in seconds with DALL-E's free AI image
            generator.
          </div>
          <div className="input-group mx-2 my-3">
            {/* ---------------------Input Field------------------- */}
            <input
              className="com m-0 p-3"
              ref={inputRef}
              onChange={(e) => setuserPrompt(e.target.value)}
              value={transcript || userPrompt}
              placeholder="Describe what you want to see with phrases"
            />
            {/* --------------------Clear Button----------------- */}
            {userPrompt !== "" ? (
              <div
                onClick={handleClear}
                className="clearButton"
                style={{ color: "red !important" }}
              >
                <span className="text-danger">
                  <FaTimes />
                </span>
              </div>
            ) : null}
            {/* -------------------Microphone------------------- */}
            <div
              className={`microphone fs-1 px-5 py-2 shadow-out text-color ${
                listening ? "link_active" : null
              }`}
              onClick={SpeechRecognition.startListening}
              disabled={listening}
            >
              {listening ? (
                <ImpulseSpinner size={23} color="white" />
              ) : (
                <div class="mic">
                  <FaMicrophone />
                </div>
              )}
            </div>
          </div>
          {/* -------------------IDEAS----------------- */}
          <div className="ideas my-2 mx-5 pop">
            <strong className="mx-3 fs-2 text-start textClip">
              Try these :
            </strong>
            <span
              className="ideas_text"
              onClick={(e) => setuserPrompt(e.target.innerText)}
            >
              3d cute brown-skinned man with beard
            </span>
            <span
              className="ideas_text "
              onClick={(e) => setuserPrompt(e.target.innerText)}
            >
              A cyberpunk woman with glasses
            </span>
            <span
              className="ideas_text"
              onClick={(e) => setuserPrompt(e.target.innerText)}
            >
              Highly detailed portrait of a wolf
            </span>
            <span
              className="ideas_text"
              onClick={(e) => setuserPrompt(e.target.innerText)}
            >
              Street store in the anime
            </span>
            <span
              className="ideas_text"
              onClick={(e) => setuserPrompt(e.target.innerText)}
            >
              Fireworks in the canyon
            </span>
          </div>
          {/* --------------------Generate Button------------------------- */}
          <div className="text-center mt-5">
            <button
              style={{ background: "#e6e7ee" }}
              className={`generateButton border shadow-out px-5 py-3 fs-2 ${
                loading ? "link_active" : null
              } `}
              onClick={generateImage}
            >
              {loading ? (
                <span className="pop text-secondary fs-2 fw-bold">
                  Generating...
                </span>
              ) : (
                <span className="pop textClip fs-2 fw-bold">
                  Generate Image
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ---------------------------Image  Preview   Field------------------------------ */}
        <div className="col-lg-4 col-sm-4 py-5 px-4 fs-1">
          {/* -------------Heading----------- */}
          <div className="text-color fw-bold brandon px-1 text-center ">
            <span className="text_heading_image textClip pop">A</span>
            <span className="text_heading_rp pop">rt</span> &nbsp;
            <span className="text_heading_image textClip display-1 pop">P</span>
            <span className="text_heading_rp pop">review</span>
          </div>

          {/* -----------Image Field---------- */}
          <div className="responseImage p-0 rounded-4 text-center shadow-in">
            {loading ? (
              <>
                <h1 className="textClip mt-5">Hang On a sec...</h1>
                <RotateSpinner size={60} color="black" />
                <h1 className="textClip mb-5">Creating an AI Image...</h1>
              </>
            ) : error ? ( // ---------Error Message ----------------
              <div className="text-color error brandon ">
                <span className="text-danger">Error:</span> Please Enter a Valid
                information
              </div>
            ) : userPrompt === "" ? ( //-------------Search Info-----------
              <p className="textClip px-3 pop">
                Search Anything you wanna see !!
              </p>
            ) : (
              <img // ---------------Actual Image--------------
                onClick={overlay}
                className="actual_image shadow-out"
                src={imageUrl}
                href="top"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAreaImage;
