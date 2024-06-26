import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import { addToHistoryApi, deleteVideoApi } from "../../services/allApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function VideoCard({ displayVideo, setDeleteVideoStatus, isCategory }) {
  const [show, setShow] = useState(false);
  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteVideoStatus(result.data);
      toast.error(`Video Deleted Succesfully`);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let caption = displayVideo?.caption;
    let url = displayVideo?.url;
    let time = new Date();
    let timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);
    const reqBody = {
      caption,
      url,
      timeStamp,
    };
    const result = await addToHistoryApi(reqBody);
    console.log(result);
  };
  const videoDrag = (e, id) => {
    e.dataTransfer.setData("videoID", id);
  };
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        draggable
        onDragStart={(e) => videoDrag(e, displayVideo?.id)}
      >
        {!isCategory && (
          <Card.Img
            variant="top"
            src={displayVideo?.image}
            className="w-100"
            height={"300px"}
            onClick={handleShow}
          />
        )}
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text onClick={handleShow}>{displayVideo?.caption}</Card.Text>
            {!isCategory && (
              <Button variant="danger">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#ffffff" }}
                  onClick={() => handleDelete(displayVideo?.id)}
                />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="514"
            src={`${displayVideo?.url}?autoplay=1`}
            title={displayVideo?.caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
