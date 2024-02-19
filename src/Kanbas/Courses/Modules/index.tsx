import ModuleList from "./List";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaEllipsisV, FaPlus, FaRegCheckCircle } from "react-icons/fa";

function Modules() {
  return (
    <div>
      <div className="row m-1">
        {/* <div className="col-12"> */}
        <button className="btn btn-primary col-3">Collapse All</button>
        <button className="btn btn-primary ms-1 col-3">View Progress</button>
        <div className="dropdown col-3">
          <button
            className="btn btn-primary w-100
        dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaRegCheckCircle className="wd-green-color" /> Publish All
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Option 1</li>
            <li className="dropdown-item">Option 2</li>
            <li className="dropdown-item">Option 3</li>
          </ul>
        </div>
        <button className="btn-red btn-primary ms-1 col-2">
          <FaPlus /> <span className="wd-white-color">Module</span>
        </button>
        <button className="btn btn-primary ms-1 col">
          <FaEllipsisV />
        </button>
      </div>
      <div className="row">
        <div className="col-12">
          <ModuleList />
        </div>
      </div>
    </div>
  );
}

export default Modules;
