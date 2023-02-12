import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import { RotateSpinner, ImpulseSpinner } from "react-spinners-kit";
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Assistant.css";
import { FaTelegramPlane, FaTimes, FaMicrophone } from "react-icons/fa";

//---------------API Configuration--------------------------

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const Assistant = () => {
  const { transcript, listening } = useSpeechRecognition(); // for listening the user input.
  const { speak, speaking } = useSpeechSynthesis(); // for Speaking the Response.
  const [message, setMessage] = useState([]); // for displaying the response we get.
  const [loading, setLoading] = useState(false); // for the loading animation while fetching data.
  const [userInput, setUserInput] = useState(""); // for taking the input  text.
  const [error, setError] = useState(null);

  //input Field autofocus when clear button is clicked
  const inputRef = useRef(null);
  const responseContainerRef = useRef(null);
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
  // function handleDelete() {
  //   setMessage("Hi there , How can i help you ?");
  //   window.speechSynthesis.cancel();
  // }
  // --------------API CALLING_-----------------------
  async function callApi() {
    if (!transcript && !userInput) {
      setError("Error: ");
      return;
    }
    setLoading(true);
    try {
      const responseField = document.querySelector(".response");
      responseField.scrollTop = responseField.scrollHeight;
      window.scrollBy(0, 1000);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: transcript || userInput,
        max_tokens: 1024,
        temperature: 0.9,
      });

      setMessage([
        ...message,
        { userInput, response: response.data.choices[0].text },
      ]);
      speak({ text: response.data.choices[0].text });
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatAssitant">
      <div className="response container-fluid" ref={responseContainerRef}>
        <div className="fs-3 user shadow-out my-2 mx-2">
          <div className="userImage">
            <img src="public\images\user.png" alt="userImage" />
          </div>
          <div className="userMessage">Hi There</div>
        </div>
        <div className="fs-3 user my-5 mx-2">
          <div className="userImage">
            <img src="public\images\bot.png" alt="botImage" />
          </div>
          <div className="userMessage">Search anything...</div>
        </div>
        {message.map((item, index) => (
          <div key={index}>
            <div className="fs-3 user shadow-out my-2 mx-2">
              <div className="userImage">
                <img src="public\images\user.png" alt="userImage" />
              </div>
              <div className="userMessage">{item.userInput}</div>
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
            className={`sendButton p-4 text-color ${
              listening ? "link_active" : null
            }`}
            onClick={callApi}
          >
            {loading ? (
              <RotateSpinner size={25} color="#000" />
            ) : (
              <div className="textClip px-3 fs-2 text-primary">
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
  );
};

export default Assistant;
