import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.id}>
          <p className="my-1 fw-semibold">{exp.jobTitle} @ {exp.company} {exp.startDate} - {exp.endDate}</p>
          <p className="my-2 fst-italic px-3">{exp.jobDescription}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className="Experience py-4 px-3 px-lg-5">
        <h2 className='fs-4 px-3'><FontAwesomeIcon icon={faBusinessTime} /> EXPERIENCIA</h2>
        { myExperience }
    </div>
  )
};

export default Experience;
