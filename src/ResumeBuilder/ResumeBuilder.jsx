import React, { useState } from "react";
import "./ResumeBuilder.css";
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const createPdf = () => {
    const preview = document.querySelector(".preview");
    html2canvas(preview).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const docDefinition = {
        content: [
          {
            image: imgData,
            width: 500,
            height: preview.offsetHeight,
          },
        ],
      };

      pdfMake.createPdf(docDefinition).download(`${name}.pdf`);
    });
  };

  return (
    <div className="text-center fs-1 grid-container">
      <div className="form grid-item">
        <h1>Resume Builder</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button onClick={createPdf}>Download PDF</button>
      </div>

      <div className="preview mt-5 grid-item">
        <h3>Preview</h3>
        <p>Name: {name}</p>
        <p>Email: {email} </p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default ResumeBuilder;
