import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <Navbar className="bg-transparent border">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon
            className="text-warning"
            icon={faVideo}
            beat
            size="2xl"
          />
          <span className="text-warning ms-3 fs-5"> Media Player</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Menu;
