import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

import "/node_modules/font-awesome/css/font-awesome.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { addAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();

  // const assignmentList = useSelector(
  //   (state: KanbasState) => state.assignmentsReducer.assignments
  // );
  // console.log("assignmentList", assignmentList);
  // console.log("assignmentId", assignmentId);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      {/* <div className="float-end mb-4">
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
      <hr /> */}
      <h2>Assignment Name</h2>
      <input
        type="text"
        className="form-control mb-3"
        id="a1"
        name="a1"
        value={assignment?.title ?? "New Assignment Name"}
      />
      <textarea className="form-control mb-3">
        {assignment
          ? "This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify."
          : "New Assignment Description"}
      </textarea>

      <form>
        <div className="row mb-3">
          <label htmlFor="points" className="col-sm-4 col-form-label text-end">
            Points
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control w-50"
              id="points"
              value="100"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label
            htmlFor="assignments_group"
            className="col-sm-4 col-form-label text-end"
          >
            Assignment Group
          </label>
          <div className="col-sm-8">
            <select className="form-control w-50" id="assignments_group">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="display_grade"
            className="col-sm-4 col-form-label text-end"
          >
            Display Grade As
          </label>
          <div className="col-sm-8">
            <select className="form-control w-50" id="display_grade">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4"></div>
          <div className="col-sm-8 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="count_assignment"
            />
            <label className="form-check-label" htmlFor="count_assignment">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4 col-form-label text-end">Assign</div>
          <div className="col-sm-8 mb-3">
            <div className="bordered-div w-50">
              <p className="m-1">
                <b>Assign to</b>
              </p>
              <select className="form-select mb-3">
                <option selected>
                  Everyone <i className="fa-solid fa-xmark"></i>
                </option>
              </select>
              <p className="m-1">
                <b>Due</b>
              </p>
              <input
                type="datetime-local"
                className="form-control mb-3"
                value="2023-09-18T23:59"
              />

              <div className="row mb-3">
                <div className="col-sm-6">
                  <p className="m-1">
                    <b>Available From</b>
                  </p>
                  <input
                    type="datetime-local"
                    className="form-control mb-3"
                    value="2023-09-06T12:00"
                  />
                </div>
                <div className="col-sm-6">
                  <p className="m-1">
                    <b>Until</b>
                  </p>
                  <input type="datetime-local" className="form-control mb-3" />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-sm w-50 wd-custom-dotted-border"
            >
              <i className="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="notify_users"
        />
        <label className="form-check-label" htmlFor="notify_users">
          Notify users that this content has changed
        </label>
        <div className="float-end">
          <button
            onClick={() => {
              dispatch(
                addAssignment({
                  ...assignment,
                  _id: assignmentId,
                  title: "New Assignment",
                  course: courseId,
                })
              );
              navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }}
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
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
