import '../App.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

function Skills(props) {
    const mySkills = (
        <div className="row">
            {props.skills.map((skill) =>
                <div className='col-xs-12 col-lg-6' key={skill.name}>
                    <p className="fs-6 fw-bold my-2">{skill.name}</p>
                    <ProgressBar animated now={skill.percentage} />
                </div>
            )}
        </div>
    );
    return (
        <div className='Skills py-4 px-3 px-lg-5'>
            <h2 className='fs-4 px-3'><FontAwesomeIcon icon={faCode} /> SKILLS</h2>
            {mySkills}
        </div>
    );
}

export default Skills;
