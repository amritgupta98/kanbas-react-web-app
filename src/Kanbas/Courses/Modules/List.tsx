import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4">
              <button
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
                className="btn btn-primary m-2 mb-3"
              >
                Add
              </button>
              <button
                onClick={() => dispatch(updateModule(module))}
                className="btn btn-primary m-2 mb-3"
              >
                Update
              </button>
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
                className="m-2"
              />
            </div>
            <div className="col-8">
              <textarea
                value={module.description}
                style={{ height: "1.5em", width: "95%" }}
                className="m-3"
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              />
            </div>
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <FaEllipsisV className="me-2 mt-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success mt-3" />
                  <FaPlusCircle className="m-1 mt-3" />
                  <FaEllipsisV className="m-1 mt-3" />
                </span>
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="float-end m-1 me-2 btn btn-primary"
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="float-end m-1 me-2 btn btn-red"
                >
                  Delete
                </button>
              </div>
              {/* {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;
