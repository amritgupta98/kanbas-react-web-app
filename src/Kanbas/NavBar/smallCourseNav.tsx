import { Link } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";

function smallCourseNav() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      <div className="small-screen-top-bar pb-3 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <i className="fa-solid fa-bars wd-white-color"></i>
            </div>
            <div className="col">
              <p className="wd-underline">
                RS4550 Rocket Propulsion <br />
                Modules
              </p>
            </div>
            <div className="col-2">
              <div className="float-end">
                <i className="fa-solid fa-glasses wd-white-color"></i>
                <Link to="/Kanbas/Courses/RS101/Home">
                  <i className="fa-solid fa-xmark wd-white-color wd-white-border"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-1 text-end">
          <i className="fa-solid fa-house wd-red-color"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/courses/home/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Home
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-boxes-stacked wd-red-color"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/courses/modules/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Modules
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-plug wd-red-color"></i>
        </div>
        <div className="col text-start wd-red-color">Piazza</div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-plug wd-red-color"></i>
        </div>
        <div className="col text-start wd-red-color">Zoom Meetings</div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-file-signature wd-red-color"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/courses/assignments/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Assignments
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-rocket wd-red-color"></i>
        </div>
        <div className="col text-start wd-red-color">Quizzes</div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-file-signature wd-red-color"></i>
          </div>
          <div className="col text-start">
            <a
              href="/kanbas/courses/grades/screen.html"
              className="wd-remove-text-decoration wd-red-color"
            >
              Grades
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-user-group wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">People</div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-plug wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">Panopto Video</div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-regular fa-comments wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Discussions
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-bullhorn wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Announcements
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-regular fa-file-lines wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Pages
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-regular fa-folder wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Files
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-regular fa-file-lines wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Rubrics
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-bullseye wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Outcomes
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-regular fa-circle wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Collaborations
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-book wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Syllabus
            <i className="fa-regular fa-eye-slash ms-3 wd-black-color"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-plug wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">
            Progress Reports (EAB Navigate)
          </div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-gear wd-red-color"></i>
          </div>
          <div className="col text-start">
            <a
              href="/kanbas/courses/settings/course_details/screen.html"
              className="wd-remove-text-decoration wd-red-color"
            >
              Settings
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default smallCourseNav;
