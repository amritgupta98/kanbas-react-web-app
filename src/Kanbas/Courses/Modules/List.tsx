import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const allModulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );

  const modulesList = allModulesList.filter(
    (module) => module.course === courseId
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
                className="m-2"
              />
            </div>
            <div className="col-6">
              <textarea
                value={module.description}
                style={{ height: "1.5em", width: "100%" }}
                className="m-2"
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
            <div className="col-3">
              <button
                onClick={() => dispatch(updateModule(module))}
                className="btn btn-primary m-1 float-end"
              >
                Update
              </button>
              <button
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
                className="btn btn-primary m-1 float-end"
              >
                Add
              </button>
            </div>
          </div>
        </li>

        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div className="mb-3">
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
              <button
                onClick={() => dispatch(setModule(module))}
                className="btn btn-primary float-end me-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="float-end me-2 btn btn-red"
              >
                Delete
              </button>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map(
                  (lesson: {
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                  }) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;
