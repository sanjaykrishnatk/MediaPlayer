import React, { useEffect, useState } from "react";
import {
  faArrowLeft,
  faHouse,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { deleteHistoryApi, getHistoryApi } from "../../services/allApi";
function Watchhistory() {
  const [history, setHistory] = useState([]);
  const [deleteHistoryStatus, setDeleteHistoryStatus] = useState(false);
  const getHistory = async () => {
    const result = await getHistoryApi();
    if (result.status >= 200 && result.status < 300) {
      setHistory(result.data);
    }
  };
  const handleDelete = async (id) => {
    const result = await deleteHistoryApi(id);
    if (result.status >= 200 && result.status < 300) {
      console.log(result.data);
      console.log("history deleted succesfully");
      setDeleteHistoryStatus(!deleteHistoryStatus);
    }
  };
  useEffect(() => {
    getHistory();
  }, [deleteHistoryStatus]);
  console.log(history);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-5">
        <h5>Watch History</h5>
        <h5>
          <Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>
            <span id="rm-small">
              <FontAwesomeIcon icon={faArrowLeft} beat className="me-2" />
              Back to Home
            </span>
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#ffffff" }}
              className="ms-2"
            />
          </Link>
        </h5>
      </div>
      <div className="row d-flex justify-content-center align-items-center m-0 p-0">
        <div className="col-md-1"></div>
        <div className="col-md-10  p-3 col-sm-p-0">
          {history.length == 0 ? (
            <p className="text-warning fs-5 fw-bold"></p>
          ) : (
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>Timestamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {history?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td>
                      <Link to={item?.url} target="_blank">
                        {item?.url}
                      </Link>
                    </td>
                    <td>{item?.timeStamp}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item?.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default Watchhistory;
