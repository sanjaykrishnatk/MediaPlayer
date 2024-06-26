import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addVideoApi } from "../../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({ setAddStatus }) {
  //create a state to hold data from input field
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setVideo({
      caption: "",
      image: "",
      url: "",
    });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const { caption, image, url } = video;
    if (!caption || !image || !url) {
      // alert(`Please fill the form completely`);
      toast.info(`Please fill the form completely`);
    } else {
      const result = await addVideoApi(video);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        // alert(`Video uploaded succesfully`);
        toast.success(`Video uploaded succesfully`);
        setAddStatus(result.data);
        handleClose();
      } else {
        // alert(`Something went wrong`);
        toast.error(`Something went wrong`);
      }
    }
  };
  const handleShow = () => setShow(true);
  const validateLink = (value) => {
    let videoURL = value;
    if (videoURL.endsWith("?feature=shared")) {
      const url = videoURL.slice(-26, -15);
      let embedLink = `https://www.youtube.com/embed/${url}`;
      setVideo({ ...video, url: embedLink });
    } else if (videoURL.startsWith("https://youtu.be/")) {
      const url = videoURL.slice(17, 28);
      let embedLink = `https://www.youtube.com/embed/${url}`;
      setVideo({ ...video, url: embedLink });
    } else {
      const url = videoURL.slice(-11);
      let embedLink = `https://www.youtube.com/embed/${url}`;
      setVideo({ ...video, url: embedLink });
    }
  };
  console.log(video);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 id="rm-small">Upload</h5>
        <button className="btn mb-2" onClick={handleShow}>
          <FontAwesomeIcon icon={faCloudArrowUp} size="xl" />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <FontAwesomeIcon icon={faFilm} className="me-3" />
            Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLease fill the following details</p>
          <form className="border p-3 rounded border-secondary">
            <input
              type="text"
              placeholder="Video Caption"
              className="form-control"
              onChange={(e) => setVideo({ ...video, caption: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video Image"
              className="form-control mt-3"
              onChange={(e) => setVideo({ ...video, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video URL"
              className="form-control mt-3"
              onChange={(e) => validateLink(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose="1000" />
    </>
  );
}

export default Add;
