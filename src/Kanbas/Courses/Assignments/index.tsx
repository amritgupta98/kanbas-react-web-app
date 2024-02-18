import React from "react";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

import "/node_modules/font-awesome/css/font-awesome.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
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
              <button type="button" className="btn-red btn-danger btn-sm m-1">
                <i className="fa-solid fa-plus"></i> Assignment
              </button>
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
          {/* <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div> */}

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
            {assignmentList.map((assignment) => (
              // <li className="list-group-item">
              //   <FaEllipsisV className="me-2" />
              //   <Link
              //     to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              //   >
              //     {assignment.title}
              //   </Link>
              //   <span className="float-end">
              //     <FaCheckCircle className="text-success" />
              //     <FaEllipsisV className="ms-2" />
              //   </span>
              // </li>

              <li className="list-group-item rounded-0 wd-border-left-green-5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-1 px-0 wd-col-width-icon">
                      <i className="fa-solid fa-grip-vertical wd-modules"></i>
                      <i className="fa-solid fa-file-signature wd-green-color"></i>
                    </div>
                    <div className="col-md-10 px-0">
                      <p className="wd-assignemnt-headings">
                        {/* <a
                          href="edit/screen.html"
                          className="wd-remove-text-decoration wd-black-color"
                        > */}
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                          className="wd-remove-text-decoration wd-black-color"
                        >
                          {assignment.title}
                          {/* </a> */}
                        </Link>
                      </p>
                      <p className="wd-assignemnt-text wd-gray-color">
                        Week 0 - SETUP - Week starting on Monday September 5th
                        (9/5/2022) Module |
                      </p>
                      <p className="wd-assignemnt-text wd-gray-color">
                        <span className="wd-bold-text">Due</span> Sep 18, 2022
                        at 11:59pm | 100 pts
                      </p>
                    </div>
                    <div className="col">
                      <div className="float-end">
                        <i className="fa-solid fa-circle-check wd-disabled-green-color m-3"></i>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
