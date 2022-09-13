import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Social = (props) => {
  const socialNetworks = (
    <span>
      {props.social.map((socialNetwork) =>
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer" key={socialNetwork.name}>
            <FontAwesomeIcon className="mx-1 fs-3 text-light" icon={socialNetwork.icon}/>
          </a>
      )}
    </span>
  );
  return (
    <div className="social">
      {socialNetworks}
    </div>
  )
};

export default Social;
