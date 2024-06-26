import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import VideoCard from "./VideoCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import {
  addCategoryApi,
  allCategoryApi,
  deleteCategoryApi,
  getOneVideoApi,
  updateCategoryApi,
} from "../../services/allApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Category({ dragStatus, setDragStatus }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState([]);
  // const [status, addStatus] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);

  const addCategory = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideo: [],
      };
      const result = await addCategoryApi(reqBody);
      console.log(result.data);
      if (result.status >= 200 && result.status < 300) {
        getAllCategory();
        toast.success(`Category Added Succesfully`);
        handleClose();
      }
    } else {
      toast.info(`Please fill relavant fields`);
    }
  };
  const getAllCategory = async () => {
    const result = await allCategoryApi();
    if (result.status >= 200 && result.status < 300) {
      setCategory(result.data);
    }
  };
  const deleteCategory = async (id) => {
    const result = await deleteCategoryApi(id);
    if (result.status >= 200 && result.status < 300) {
      toast.error(`Category Deleted Succesfully`);
      getAllCategory();
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const VideoDrop = async (e, categoryId) => {
    console.log(`category id is ${categoryId}`);
    //accessing video id from video card
    const videoId = e.dataTransfer.getData("videoID");
    console.log(`video id is ${videoId}`);
    //get the video details from backend
    const { data } = await getOneVideoApi(videoId);
    console.log(data);
    const selectedCategory = category.find((item) => item.id == categoryId);
    console.log(selectedCategory);
    if (selectedCategory["allVideo"].find((item) => item.id == data.id)) {
      toast.warning("Video already exist in category");
    } else {
      selectedCategory.allVideo.push(data);
      await updateCategoryApi(categoryId, selectedCategory);
      getAllCategory();
    }
  };
  const DragStart = (e, videoID, categoryID) => {
    console.log(e, videoID, categoryID);
    let dataShare = {
      videoID,
      categoryID,
    };
    e.dataTransfer.setData("datasHared", JSON.stringify(dataShare));
  };

  useEffect(() => {
    getAllCategory();
    setDragStatus(false);
  }, [dragStatus]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        className="btn btn-warning w-100 ms-4 ms-md-0"
        onClick={handleShow}
      >
        Add New Category +
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faPen} className="text-warning me-2" />
            Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-center border border-secondary p-3 rounded">
            <form>
              <label className="mb-2">Category Name</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {category.map((item) => (
        <div
          className="d-flex flex-column align-items-center w-100 mt-4 border p-3 rounded border border-secondary ms-4 ms-md-0"
          droppable
          onDragOver={(e) => dragOver(e)}
          onDrop={(e) => VideoDrop(e, item?.id)}
        >
          <div className="d-flex justify-content-between align-items-center w-100 ps-3 pe-3 mb-3">
            <p>{item?.categoryName}</p>
            <button
              className="btn btn-danger"
              onClick={() => deleteCategory(item.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ffffff" }} />
            </button>
          </div>
          <Row>
            {item?.allVideo?.length > 0 &&
              item?.allVideo?.map((videoItem) => (
                <Col
                  sm={12}
                  className="mb-3"
                  draggable
                  onDragStart={(e) => DragStart(e, videoItem.id, item.id)}
                >
                  <VideoCard displayVideo={videoItem} isCategory={true} />
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Category;
