import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import CourseNavigation from "./Navigation";
import NavBar from "../NavBar";
import Modules from "./Modules";
import { FaBars } from "react-icons/fa";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  // const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />
      <div className="row m-0">
        {/* use flex */}
        <div className="col-1 m-auto ps-5 pt-0 pe-0 mt-4 me-0">
          <FaBars />
        </div>
        <div className="col-11 ps-0 ms-0">
          <NavBar />
        </div>
        <hr />
      </div>
      <div className="row m-0">
        <div className="col-2 p-0">
          <CourseNavigation />
        </div>
        <div className="col-10 p-0">
          <div
            className="overflow-y-scroll bottom-0 end-0"
            style={{ left: "320px", top: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />{" "}
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
  );
}

export default Courses;
