import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="row d-flex  w-100 pt-4 footer-main">
      <div className="col-md-4 d-flex flex-column column-1">
        <div className="d-flex">
          <FontAwesomeIcon className="text-warning" icon={faVideo} size="2xl" />
          <h4 className="ms-3">Media Player</h4>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            doloremque recusandae eligendi saepe, dolorum deserunt at.
            Doloremque ex dolores, ducimus ratione iste, suscipit debitis minus
            vitae aspernatur, illo cumque. Ducimus.
          </p>
        </div>
      </div>
      <div className="col-md-1 d-flex flex-column  ms-4">
        <h4>Links</h4>
        <p>
          <Link to={"/"}>Landing Page</Link>
        </p>
        <p>
          <Link to={"/home"}>Home</Link>
        </p>
        <p>
          <Link to={"/watch-history"}>Watch History</Link>
        </p>
      </div>
      <div className="col-md-1 d-flex flex-column  ms-4">
        <h4>Guides</h4>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-4 d-flex flex-column  ms-4">
        <h4>Contacts</h4>
        <div className="d-flex ">
          <input
            type="text"
            placeholder="Enter your Email ID"
            className="form-control w-50"
          />
          <button className="btn btn-warning ms-2">Subscribe</button>
        </div>
        <div className="d-flex mt-4 ">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="ms-5 me-5"
          />
          <FontAwesomeIcon icon={faFacebook} size="2xl" className="me-5" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" className="me-5" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" className="me-5" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
