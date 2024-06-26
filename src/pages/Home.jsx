import React, { useState } from "react";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";

import { Link } from "react-router-dom";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [addStatus, setAddStatus] = useState([]);
  const [dragStatus, setDragStatus] = useState(false);
  return (
    <>
      <div className="d-flex mt-5 p-5">
        <Add setAddStatus={setAddStatus} />
        <h5 className="ms-auto">
          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span id="rm-small">Watch History</span>
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </Link>
        </h5>
      </div>
      <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4 className="mb-3 fw-bold">All Videos</h4>
          <View addStatus={addStatus} setDragStatus={setDragStatus} />
        </div>
        <div className="col-md-3">
          <Category dragStatus={dragStatus} setDragStatus={setDragStatus} />
        </div>
      </div>
    </>
  );
}

export default Home;
