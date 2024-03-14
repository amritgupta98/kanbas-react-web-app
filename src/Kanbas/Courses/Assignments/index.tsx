import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import db from "../../Database";

import "/node_modules/font-awesome/css/font-awesome.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();

  // useSelector
  // use the store

  // const s = useSelector((state: any) => state);
  // console.log(s.assignmentsReducer);

  const assignmentList = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ).filter((assignment: { course: string }) => assignment.course === courseId);

  const [assignmentId, setAssignmentId] = useState(
    assignmentList.sort((a: { _id: number }, b: { _id: number }) =>
      a._id > b._id ? 1 : -1
    )[assignmentList.length - 1]?._id
  );
  var numPart = assignmentId?.substring(1);
  var incrementedNum = parseInt(numPart || "0", 10) + 1;
  const [newAssignmentId, setNewAssignmentId] = useState(
    "A" + incrementedNum.toString()
  );

  useEffect(() => {
    setAssignmentId(assignmentList[assignmentList.length - 1]?._id);
    var numPart = assignmentId?.substring(1);
    var incrementedNum = parseInt(numPart || "0", 10) + 1;
    setNewAssignmentId("A" + incrementedNum.toString());
  }, [assignmentId, assignmentList, newAssignmentId]);

  const [deleteAssignmentId, setDeleteAssignmentId] = useState("");

  const handleDeleteClick = (id: string) => {
    setDeleteAssignmentId(id);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="modal fade"
        id="deleteAssignmentModal"
        // tabIndex="-1"
        aria-labelledby="deleteAssignmentModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteAssignmentModal">
                Delete Assignment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Confirm Delete Assignment</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-red"
                onClick={() => {
                  dispatch(deleteAssignment(deleteAssignmentId));
                }}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      <div className="container">
        <div className="row">
          <div className="col m-1">
            <input
              type="text"
              className="form-control w-25"
              id="search_assignments"
              name="search_assignments"
              placeholder="Search for Assignments"
            />
          </div>
          <div className="col-auto">
            <div className="float-end">
              <button type="button" className="btn btn-sm">
                <i className="fa-solid fa-plus"></i> Group
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${newAssignmentId}`}
              >
                <button type="button" className="btn-red btn-danger btn-sm m-1">
                  <i className="fa-solid fa-plus"></i>
                  <span className="wd-white-color">Assignment</span>
                </button>
              </Link>
              <button type="button" className="btn btn-sm">
                <i className="fa fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="list-group-item rounded-0 wd-bg-lightgray">
            <i className="fa-solid fa-grip-vertical wd-modules ms-2"></i>
            <i className="fa-solid fa-caret-down wd-modules"></i>
            Assignments
            <div className="float-end">
              <div className="wd-pill-box rounded-pill wd-bg-lightgray">
                40% of Total
              </div>

              <i className="fa-solid fa-plus me-2"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>

          <ul className="list-group">
            {assignmentList.map(
              (assignment: {
                _id: any;
                title: string | null | undefined;
                description: string | null;
                due: Date | null;
                points: string | null;
              }) => (
                <li className="list-group-item rounded-0 wd-border-left-green-5">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-1 px-0 wd-col-width-icon">
                        <i className="fa-solid fa-grip-vertical wd-modules"></i>
                        <i className="fa-solid fa-file-signature wd-green-color"></i>
                      </div>
                      <div className="col-md-8 px-0">
                        <p className="wd-assignemnt-headings">
                          <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="wd-remove-text-decoration wd-black-color"
                          >
                            {assignment.title}
                          </Link>
                        </p>
                        <p className="wd-assignemnt-text wd-gray-color">
                          {assignment.description} Module |
                        </p>
                        <p className="wd-assignemnt-text wd-gray-color">
                          <span className="wd-bold-text">Due </span>
                          {String(assignment.due)} | {assignment.points}
                        </p>
                      </div>
                      <div className="col">
                        <div className="float-end">
                          <button
                            type="button"
                            className="btn btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteAssignmentModal"
                            onClick={() => handleDeleteClick(assignment._id)}
                          >
                            Delete Assignment
                          </button>
                          <i className="fa-solid fa-circle-check wd-disabled-green-color m-3"></i>
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
