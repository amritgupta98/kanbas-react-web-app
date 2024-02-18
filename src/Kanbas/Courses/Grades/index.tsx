import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { FaKeyboard } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="row m-0">
        <div className="col-5">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "white",
                color: "red",
              }}
            >
              Gradebook
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-1">
          <FaKeyboard
            className="float-end mt-3 me-3"
            style={{ color: "red" }}
          />
        </div>
        <div className="col-6">
          <div className="float-end mb-2">
            <button type="button" className="btn btn-sm">
              <i className="fa-solid fa-file-import"></i> Import
            </button>
            <button
              type="button"
              className="btn btn-sm dropdown-toggle ms-2 me-2"
            >
              <i className="fa-solid fa-file-export"></i> Export
            </button>
            <button type="button" className="btn btn-sm">
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-6">
            <b>Student Names</b>
          </div>
          <div className="col-6">
            <b>Assignment Names</b>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>🔍 Search Students</option>
            </select>
          </div>
          <div className="col-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>🔍 Search Assignments</option>
            </select>
          </div>

          <div className="row mt-3 mb-2">
            <div className="col-6">
              <button type="button" className="btn btn-sm">
                <i className="fa-solid fa-filter"></i> Apply Filters
              </button>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center table-hover">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments
                    .filter((assignment) => assignment.course === courseId)
                    .map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return <td>{grade?.grade || ""}</td>;
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
