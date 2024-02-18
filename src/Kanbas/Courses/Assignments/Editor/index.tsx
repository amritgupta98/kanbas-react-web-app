import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

import "/node_modules/font-awesome/css/font-awesome.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      <div className="float-end mb-4">
        <i className="fa-solid fa-circle-check wd-red-color"> </i>
        <span className="wd-red-color ms-1 me-2">Published</span>
        <button type="button" className="btn btn-sm me-3">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      <br />
      <br />
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment?.title} className="form-control mb-2" />
      <button
        onClick={handleSave}
        className="btn-red btn-success ms-2 float-end"
      >
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default AssignmentEditor;
