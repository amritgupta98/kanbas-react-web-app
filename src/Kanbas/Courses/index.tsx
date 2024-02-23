import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";

import CourseNavigation from "./Navigation";
import NavBar from "../NavBar";
import Modules from "./Modules";
import { FaBars } from "react-icons/fa";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useMediaQuery } from "react-responsive";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const isLargeScreen = useMediaQuery({ minWidth: 601 });
  return (
    <div>
      {isLargeScreen ? (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            crossOrigin="anonymous"
          />
          <div className="row m-0">
            <div className="col-1 m-auto ps-5 pt-0 pe-0 mt-4 me-0">
              <FaBars />
            </div>
            <div className="col-11 ps-0 ms-0">
              <NavBar />
            </div>
            <hr />
          </div>
          <div className="row m-0">
            <div className="col-lg-2 p-0 d-none d-lg-block">
              <CourseNavigation />
            </div>
            <div className="col-12 col-lg-10 p-0">
              <div
                className="overflow-y-scroll bottom-0 end-0"
                style={{ left: "320px", top: "50px" }}
              >
                <Routes>
                  <Route path="/" element={<Navigate to="Home" />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="Modules" element={<Modules />} />
                  <Route path="Piazza" element={<h1>Piazza</h1>} />
                  <Route path="Assignments" element={<Assignments />} />
                  <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor />}
                  />
                  <Route path="Grades" element={<Grades />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            crossOrigin="anonymous"
          />
          <div className="small-screen-top-bar d-md-none pb-3 pt-3">
            <div className="container">
              <div className="row">
                <div className="col-1">
                  <Link to="/Kanbas/NavBar/SmallKanbasNav">
                    <i className="fa-solid fa-bars wd-white-color"></i>
                  </Link>
                </div>
                <div className="col">
                  <p>
                    {course?.number + " "}
                    {course?.name} <br />
                    Modules
                  </p>
                </div>
                <div className="col-2">
                  <div className="float-end">
                    <Link to="/Kanbas/NavBar/SmallCourseNav">
                      <i className="fa-solid fa-glasses wd-white-color"></i>
                      <i className="fa-solid fa-angle-down wd-white-color"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Modules />
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
