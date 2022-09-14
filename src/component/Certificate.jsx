import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

function Certificate(props) {
    const myCertificates = (
        <Carousel>
            {props.certificate.map((cert) =>
                <Carousel.Item key={cert.key}>
                    <img
                        className="d-block w-100"
                        src={cert.image}
                        alt={cert.name}
                    />
                    <Carousel.Caption>
                        <h3> { cert.name } </h3>
                        <p>Instructor: { cert.instructor } </p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
    return (
        <div className="Certificate py-4 px-3 px-lg-5">
            <h2 className='fs-4 px-3'><FontAwesomeIcon icon={faTrophy} /> CERTIFICADOS</h2>
            <div className="firstImage"/>
            { myCertificates }
        </div>
    );
}

export default Certificate;
