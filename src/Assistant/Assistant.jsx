import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import { RotateSpinner, ImpulseSpinner } from "react-spinners-kit";
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Assistant.css";

//---------------API Configuration--------------------------

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Assistant = () => {
  const { transcript, listening } = useSpeechRecognition(); // for listening the user input.
  const { speak, speaking } = useSpeechSynthesis(); // for Speaking the Response.
  const [message, setMessage] = useState("Hi there , How can i help you ?"); // for displaying the response we get.
  const [loading, setLoading] = useState(false); // for the loading animation while fetching data.
  const [userInput, setUserInput] = useState(""); // for taking the input  text.
  const [error, setError] = useState(null);

  //input Field autofocus when clear button is clicked
  const inputRef = useRef(null);
  function clearInput() {
    setUserInput("");
    inputRef.current.focus();
    window.speechSynthesis.cancel();
  }
  // ------------------Handle Speak------------------
  function handleSpeak() {
    if (speaking) {
      window.speechSynthesis.cancel();
    } else if (!speaking) {
      speak({ text: message, pitch: 3, rate: 1 });
    }
  }
  // -------------Handle Delete functionality---------------
  function handleDelete() {
    setMessage("Hi there , How can i help you ?");
    window.speechSynthesis.cancel();
  }
  // --------------API CALLING_-----------------------
  async function callApi() {
    if (!transcript && !userInput) {
      setError("Error: ");
      return;
    }
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: transcript || userInput,
        max_tokens: 1024,
        temperature: 0.9,
      });
      setMessage(response.data.choices[0].text);
      speak({ text: response.data.choices[0].text });
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="row my-3 d-flex">
      <div className="col-lg-7 col-sm-7 mx-5 mt-5 px-5 assistant_mobile">
        {/* ---------------Heading-------------- */}
        <div className="text-color heading_voice ">
          <p>
            AI ChatGpt-3 using
            <span className="textClip">"Text-Davinci"</span>
          </p>
        </div>
        {/* -------------------App Information ------------------*/}
        <div className="brandon app_info">
          Generates text based on the input given to it , this can answer
          questions by generating text that provides the information requested.
        </div>
        <div className="px-2 inner_main">
          <strong className=" pop text-color">
            Microphone:
            {listening ? "listening..." : "off"}
          </strong>
          <br />
          {/* ---------------Input Field------------------ */}

          <div class="input-group my-3 d-flex">
            <input
              className="brandon py-3 px-4"
              ref={inputRef}
              onChange={(e) => setUserInput(e.target.value)}
              value={transcript || userInput}
              placeholder="search anything . . ."
            />
            {/* ------------Clear Button-------------- */}
            {userInput !== "" ? (
              <i
                onClick={clearInput}
                class="px-4 fa-solid fa-times clearButton "
              />
            ) : null}
            {/* ------------Microphone------------- */}
            <div
              className={`microphone fs-1 px-5 py-2 shadow-out text-color ${
                listening ? "link_active" : null
              }`}
              onClick={SpeechRecognition.startListening}
              disabled={listening}
            >
              {listening ? (
                <ImpulseSpinner size={23} color="red" />
              ) : (
                <i class="fa-solid textClip fa-microphone mic" />
              )}
            </div>
          </div>
          {/* ------------------SEND Button--------------------- */}
          <div className="text-center mt-5">
            <button
              style={{ background: "#e6e7ee" }}
              className={`sendButton border shadow-out px-5 py-3 fs-2 ${
                loading ? "link_active" : null
              } `}
              onClick={callApi}
            >
              {loading ? (
                <RotateSpinner size={35} color="#000" />
              ) : (
                <i class="fa-solid fa-paper-plane textClip px-5 fs-2"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* ---------------User--------- */}
      <div className="col-lg-4 col-sm-4 py-5 px-4 fs-1 ">
        <i class="fa-solid fa-share px-1"></i>
        {/* --------------Response------------------ */}
        <strong className="response pop">Response: </strong>
        {/* ------------Delete Icon----------- */}
        <div
          onClick={handleDelete}
          class={`transition fa-solid fa-trash-can dustbin rounded-5 shadow-out`}
        ></div>
        {/* ------------speaker icon---------------- */}
        <div
          onClick={handleSpeak}
          className={`bi bi-volume-up-fill speaker shadow-out textClip rounded-5 mx-4 ${
            speaking ? "shadow-in" : !speaking ? "shadow-out" : null
          }`}
        ></div>

        {/* ----------------------------Main Response Message--------------------------- */}
        <div className="form-control text-color text-justify brandon bg-light my-3 msg shadow-in">
          {loading ? (
            <div className="text-center">
              <h1 className="textClip text-center my-5 mt-5">
                Hang On a sec...
              </h1>
              <RotateSpinner size={60} color="white" />
            </div>
          ) : error ? ( // ---------Error Message ----------------
            <div className="error_head text-color pop">
              <span className="error text-danger fs-1 fw-bolder">{error}</span>
              Please Enter a Valid Input!!
            </div>
          ) : (
            <>
              {message.split("\n").map((item, key) => {
                return <p key={key}>{item}</p>;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assistant;
