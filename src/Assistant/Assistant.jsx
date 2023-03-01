import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import useSpeechSynthesis from "react-speech-kit/dist/useSpeechSynthesis";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Assistant.css";
import { ToastContainer, toast } from "react-toastify";

import MainAreaAssistant from "../components/AssistantComponents/MainAreaAssistant";

//---------------API Configuration--------------------------

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
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

  // --------------API CALLING_-----------------------
  async function callApi() {
    setLoading("hi");
    if (!transcript && !userInput) {
      toast.error("Please Search Something !!");
      return;
    }
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
      toast(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
     
      <MainAreaAssistant
        responseContainerRef={responseContainerRef}
        transcript={transcript}
        message={message}
        userInput={userInput}
        clearInput={clearInput}
        callApi={callApi}
        loading={loading}
        listening={listening}
        SpeechRecognition={SpeechRecognition}
        inputRef={inputRef}
        error={error}
        setUserInput={setUserInput}
      />
    </>
  );
};

export default Assistant;
