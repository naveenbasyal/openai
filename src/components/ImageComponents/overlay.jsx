import React from "react";

const overlay = ({ setIsEnlarged, imageUrl }) => {
  return (
    <>
      <div className="overlay shadow-out text-center">
        <div
          className="shadow-out textClip brandon overlay_button"
          onClick={() => setIsEnlarged(false)}
          name="top"
        >
          Cancel
        </div>
        <img
          src={imageUrl}
          className="enlarged-image shadow-in p-4 rounded-5"
        />
      </div>
    </>
  );
};

export default overlay;
