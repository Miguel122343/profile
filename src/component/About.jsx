import '../App.css';
import Social from './Social'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function About({avatar, name, profession, bio, address, social, email, phones}) {
    return (
        <div className="About p-5 fs-6 fw-bold fst-italic text-center">
            <div className='avatar'>
                <img src={avatar} alt={name} />
            </div>
            <div className='fs-4'>
                <span>{name}</span>
                <p>{profession}</p>
            </div>
            <div>
                <p>{bio}</p>
            </div>
            <div>
                <p>{address}</p>
            </div>
            <div>
                <span> <FontAwesomeIcon icon={faEnvelope}/> E-mail: {email}</span> <br/>
                <span> <FontAwesomeIcon icon={faPhone}/> Phones: {phones}</span>
            </div>
            <div><p>Creado con React</p></div>
            <Social social={social} />
        </div>
    );
}

export default About;
