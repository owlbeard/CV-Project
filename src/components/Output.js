import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Blank from '../assets/blank.jpg';
import Phone from '../assets/phone.svg';
import Mail from '../assets/email-outline.svg';

const Output = (props) => {
  const addPhoto = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.onchange = (e) => {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();

      var photo = document.getElementById('photo');
      photo.title = selectedFile.name;

      reader.onload = (e) => {
        photo.src = e.target.result;
      };

      reader.readAsDataURL(selectedFile);
    };

    input.click();
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV',
  });
  let workHeader = null;
  if (props.workExp === true)
    workHeader = <h2 id="workHeader">Work Experience</h2>;
  return (
    <div className="cvPrintContainer">
      <div ref={componentRef} className="cv">
        <div className="cvText">
          <div className="cvHeader">
            <h1>{`${props.name} ${props.surname}`}</h1>
            <h3>{props.title}</h3>
          </div>
          <div className="cvInfo">
            <div className="info">
              <div className="education">
                <h2 id="edu">Education:</h2>
                <p style={{ fontWeight: 900 }}>{props.school}</p>
                <p>{props.department}</p>
                <p>From: {props.from}</p>
                <p>To: {props.to}</p>
                <p>Degree: {props.degree}</p>
              </div>
              {workHeader}
              <div className="workExp">
                {props.exps.map((elem) => {
                  return (
                    <div className="workInfo">
                      <p style={{ fontWeight: 900 }}>{elem.company}</p>
                      <p>{elem.position}</p>
                      <p>From: {elem.workFrom}</p>
                      <p>To: {elem.workTo}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="photo">
          <button id="addPhoto" onClick={addPhoto}>
            <img src={Blank} alt="HeadShot" id="photo" height="200"></img>
          </button>
          <div className="contact">
            <div className="mail">
              <img id="eMail" src={Mail} alt="E-mail" />
              <p>{props.mail}</p>
            </div>
            <div className="phone">
              <img id="phoneNo" src={Phone} alt="Phone" />
              <p>{props.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handlePrint} id="print">
        Print CV
      </button>
    </div>
  );
};

export default Output;
