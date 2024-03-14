import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";

import "/node_modules/font-awesome/css/font-awesome.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";

const dateObjectToHtmlDateString = (date: Date) => {
  date = new Date(date);
  return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
    date.getMonth() + 1
  }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
};

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  const [assignment, setAssignment] = useState({
    _id: assignmentId,
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    due: new Date("2024-03-12"),
    availableFrom: new Date("2024-03-12"),
    until: new Date("2024-03-12"),
    course: courseId,
  });

  const [existingAssignment, setExistingAssignment] = useState(false);

  useEffect(() => {
    setExistingAssignment(
      assignmentList.some((item) => item._id === assignmentId)
    );

    if (existingAssignment) {
      const foundAssignment = assignmentList.find(
        (assignment) => assignment._id === assignmentId
      );
      if (foundAssignment) {
        setAssignment({
          ...foundAssignment,
        });
      }
    }
    // This will run only when assignmentList or assignmentId changes.
  }, [assignmentList, assignmentId, courseId, existingAssignment]);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      <h2>Assignment Name</h2>
      <input
        type="text"
        className="form-control mb-3"
        id="a1"
        name="a1"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />
      <textarea
        className="form-control mb-3"
        id="assignmentDescription"
        value={assignment.description}
        onChange={(e: { target: { value: any } }) =>
          setAssignment({
            ...assignment,
            description: e.target.value,
          })
        }
      ></textarea>

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
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value),
                })
              }
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
                type="date"
                id="dueDate"
                className="form-control mb-3"
                value={dateObjectToHtmlDateString(assignment.due)}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    due: new Date(e.target.value),
                  })
                }
              />
              <div className="row mb-3">
                <div className="col-sm-6">
                  <p className="m-1">
                    <b>Available From</b>
                  </p>
                  <input
                    type="date"
                    id="availableFromDate"
                    className="form-control mb-3"
                    value={dateObjectToHtmlDateString(assignment.availableFrom)}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        availableFrom: new Date(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="col-sm-6">
                  <p className="m-1">
                    <b>Until</b>
                  </p>
                  <input
                    type="date"
                    id="until"
                    className="form-control mb-3"
                    value={dateObjectToHtmlDateString(assignment.until)}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        until: new Date(e.target.value),
                      })
                    }
                  />
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
              if (existingAssignment) {
                dispatch(
                  updateAssignment({
                    ...assignment,
                    assignmentList,
                  })
                );
              } else {
                dispatch(
                  addAssignment({
                    ...assignment,
                    assignmentList,
                  })
                );
              }
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
