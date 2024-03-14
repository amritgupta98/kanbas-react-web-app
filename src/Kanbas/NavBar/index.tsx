import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import db from "../../Kanbas/Database";
import { FaGlasses } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const { pathname } = useLocation();
  const parsedPathname = pathname.split("/");
  const courseId = parsedPathname[3];
  const courseNav = parsedPathname[4];
  let assignment = "";
  let assignmentId = "";

  const assignmentList = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  ).filter((assignment: { course: string }) => assignment.course === courseId);

  if (
    parsedPathname[2] === "Courses" &&
    courseNav === "Assignments" &&
    parsedPathname.length === 6
  ) {
    assignmentId = parsedPathname[5];

    assignment =
      assignmentList.find(
        (assignment: { _id: string }) => assignment._id === parsedPathname[5]
      )?.title ?? "";
  }

  // const [courseId, courseNav] = parsedPathname.slice(-2);
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="mt-2">
      <nav aria-label="breadcrumb">
        <div className="row">
          <div className="col-10 p-0">
            <div className="breadcrumb-container">
              <ol className="breadcrumb">
                {/* <li className="breadcrumb-item mt-3 wd-remove-text-decoration wd-red-color">
              {course?.name}
            </li> */}

                <Link
                  to={`/Kanbas/Courses/${courseId}/Home`}
                  className="breadcrumb-item mt-3 wd-remove-text-decoration wd-red-color"
                >
                  {course?.name}
                </Link>

                <Link
                  to={`/Kanbas/Courses/${courseId}/${courseNav}`}
                  className={`breadcrumb-item mt-3 wd-remove-text-decoration ${
                    parsedPathname.length === 5 ? "active" : "wd-red-color"
                  }`}
                >
                  {courseNav}
                </Link>

                {parsedPathname[2] === "Courses" &&
                  courseNav === "Assignments" &&
                  parsedPathname.length === 6 && (
                    <Link
                      to={`/Kanbas/Courses/${courseId}/${courseNav}/${assignmentId}`}
                      className="breadcrumb-item mt-3 wd-remove-text-decoration active"
                    >
                      {assignment}
                    </Link>
                  )}

                {/* <li className="breadcrumb-item mt-3 wd-remove-text-decoration wd-black-color">
              {courseNav}
            </li> */}
              </ol>
            </div>
          </div>
          <div className="col-2 p-0">
            <button className="btn btn-primary float-end m-2">
              <FaGlasses className="m-1" />
              Student View
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
