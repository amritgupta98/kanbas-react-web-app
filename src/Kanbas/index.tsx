import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import SmallKanbasNav from "./NavBar/small_kanbas_nav";
import SmallCourseNav from "./NavBar/smallCourseNav";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="NavBar/SmallKanbasNav" element={<SmallKanbasNav />} />
          <Route path="NavBar/SmallCourseNav" element={<SmallCourseNav />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
