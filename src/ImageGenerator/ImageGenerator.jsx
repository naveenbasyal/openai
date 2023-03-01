import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./ImageGenerator.css";
import Overlay from "../components/ImageComponents/overlay";
import MainAreaImage from "../components/ImageComponents/MainAreaImage";

//------------------------Api configuration------------------------------------
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});
const openai = new OpenAIApi(configuration);

//------------------------------------------------------------
const ImageGenerator = () => {
  const { transcript, listening } = useSpeechRecognition(); // for speech to text
  const [userPrompt, setuserPrompt] = useState(""); // for the user prompt
  const [imageUrl, setImageUrl] = useState(""); // for the generated image url
  const [loading, setLoading] = useState(false); // for the loading animation
  const [error, setError] = useState(false); // for error handling
  const [isEnlarged, setIsEnlarged] = useState(false); // for image to make bigger when clicked

  //---------------- Image Generation Funciton---------------
  function overlay() {
    setIsEnlarged(true);
  }
  const inputRef = useRef(null);
  function handleClear() {
    setuserPrompt("");
    inputRef.current.focus();
  }
  const generateImage = async () => {
    if(!userPrompt || transcript){
      setError('Error : Search something ...')
    }
    setLoading(true);
    try {
      const response = await openai.createImage({
        prompt: userPrompt || transcript,
        n: 1,
        size: "256x256",
      });
      setImageUrl(response.data.data[0].url);
      setError(null); // reset error
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/*-------------------- To Make Image Bigger When Clicked ----------------- */}
      {isEnlarged ? (
        <Overlay imageUrl={imageUrl} setIsEnlarged={setIsEnlarged} />
      ) : null}
      {/* -------------------M a i n     R o w      S t a r t s ---------------------*/}
      <MainAreaImage
        inputRef={inputRef}
        imageUrl={imageUrl}
        setuserPrompt={setuserPrompt}
        transcript={transcript}
        userPrompt={userPrompt}
        handleClear={handleClear}
        listening={listening}
        SpeechRecognition={SpeechRecognition}
        generateImage={generateImage}
        loading={loading}
        error={error}
        setError={setError}
        overlay={overlay}
        setLoading={setLoading}
      />
    </>
  );
};

export default ImageGenerator;
