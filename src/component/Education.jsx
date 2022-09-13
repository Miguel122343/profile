import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";

const Education = (props) => {
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='col-xs-12' key={edu.degree}>
          <p className="my-1 fw-semibold"><FontAwesomeIcon icon={faCertificate} /> {edu.degree} @ {edu.institution} {edu.startDate} - {edu.endDate}</p>
          <p className="my-2 fst-italic px-3">{edu.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='Education py-4 px-3 px-lg-5'>
      <h2 className='fs-4 px-3'><FontAwesomeIcon icon={faGraduationCap} /> EDUCACIÓN</h2>
      {myEducation}
    </div>
  )
};

export default Education;
