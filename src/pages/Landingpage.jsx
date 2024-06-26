import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../assets/Landing.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <>
      <div className="row m-0 p-0 home-main">
        <div className="p-5 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <h3 className="fw-bold">
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ab
            tempora nulla, ad iusto omnis nisi, iure quidem autem odio debitis?
            Nulla mollitia sint saepe tempore et reiciendis nihil corporis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            minus, velit sapiente animi expedita sint non, nemo blanditiis
            incidunt facilis voluptas aspernatur enim culpa quis libero
            cupiditate neque deleniti? Velit!Lorem
          </p>
          <button className="btn btn-warning start-button mt-5">
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="p-5 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            className="w-75"
            src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
            alt="music-img"
          />
        </div>
      </div>
      <div className="row m-0 p-0 features-main">
        <h3 className="text-center fw-bold mt-5 pt-4">Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/animation/2023/04/06/23/17/23-17-32-365_512.gif"
              className="p-2"
              style={{ height: "200px" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          {" "}
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://media3.giphy.com/media/oFgPs9HxVPZRu/giphy.gif"
              className="w-100 p-2"
              style={{ height: "200px" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          {" "}
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1035.gif"
              className="p-2"
              style={{ height: "200px" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
        <div className="col-md-1 p-0"></div>
        <div className="col-md-10 border rounded-4 p-5 mt-3">
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className="fw-bold text-warning mt-3">
                Simple fast and powerful
              </h3>
              <p className="mt-4">
                <span className="fs-4">Play Everything :</span> Amet consectetur
                adipisicing elit. Autem veritatis totam tempore expedita! Quae
                quam, commodi dolorum iste unde atque alias debitis voluptates
                nesciunt
              </p>
              <p className="mt-4">
                <span className="fs-4">Play Everything :</span> Amet consectetur
                adipisicing elit. Autem veritatis totam tempore expedita! Quae
                quam, commodi dolorum iste unde atque alias debitis voluptates
                nesciunt
              </p>{" "}
              <p className="mt-4">
                <span className="fs-4">Play Everything :</span> Amet consectetur
                adipisicing elit. Autem veritatis totam tempore expedita! Quae
                quam, commodi dolorum iste unde atque alias debitis voluptates
                nesciunt
              </p>
            </div>
            <div className="col-md-6">
              <iframe
                width="100%"
                height="440"
                src="https://www.youtube.com/embed/k3g_WjLCsXM?list=RDk3g_WjLCsXM"
                title="Sajni (Song): Arijit Singh, Ram Sampath | Laapataa Ladies |  Aamir Khan Productions"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default Landingpage;
