import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import {
  allCategoryApi,
  getVideoApi,
  updateCategoryApi,
} from "../../services/allApi";

function View({ addStatus, setDragStatus }) {
  const [videos, setVideos] = useState([]);
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([]);
  const getVideos = async () => {
    const result = await getVideoApi();
    setVideos(result.data);
  };
  const DragOver = (e) => {
    e.preventDefault();
  };
  const videoDrop = async (e) => {
    const { videoID, categoryID } = JSON.parse(
      e.dataTransfer.getData("dataShared")
    );
    console.log(videoID, categoryID);
    //get all category
    //get selected category
    //remove video from the selected category
    const { data } = await allCategoryApi();
    const selectedCategory = data.find((item) => item.id == categoryID);
    console.log(selectedCategory);
    const result = selectedCategory.allVideo.filter(
      (item) => item.id != videoID
    );
    console.log(result);
    const reqBody = {
      categoryName: selectedCategory.categoryName,
      allVideo: result,
      id: selectedCategory.id,
    };
    await updateCategoryApi(categoryID, reqBody);
    setDragStatus(true);
  };
  useEffect(() => {
    getVideos();
  }, [addStatus, deleteVideoStatus]);

  console.log(videos);

  return (
    <Row
      className="w-100 ms-2 ms-md-0"
      onDragOver={(e) => DragOver(e)}
      onDrop={(e) => videoDrop(e)}
    >
      {videos?.length > 0 ? (
        videos.map((item) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <VideoCard
              displayVideo={item}
              setDeleteVideoStatus={setDeleteVideoStatus}
            />
          </Col>
        ))
      ) : (
        <p className="text-warning fs-5 mt-4">No video uploaded....</p>
      )}
    </Row>
  );
}

export default View;
