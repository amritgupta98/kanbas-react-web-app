import { Link } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";

function SmallKanbasNav() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />

      <div className="row">
        <div className="col">
          <div className="float-end me-5 mt-3">
            <Link to="/Kanbas/Courses/RS101/Home">
              <i className="fa-solid fa-xmark wd-black-color"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-gauge wd-red-color"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/courses/modules/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Dashboard
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-regular fa-circle-user"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/account/profile/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Account
          </a>
        </div>
        <div className="col-1 float-end">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-book wd-red-color"></i>
        </div>
        <div className="col text-start">
          <a
            href="/kanbas/courses/home/screen.html"
            className="wd-remove-text-decoration wd-red-color"
          >
            Courses
          </a>
        </div>
        <div className="col-1 float-end">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-calendar-days wd-red-color"></i>
        </div>
        <div className="col text-start wd-red-color">Calendar</div>
      </div>

      <div className="row">
        <div className="col-1 text-end">
          <i className="fa-solid fa-inbox wd-red-color"></i>
        </div>
        <div className="col text-start wd-red-color">
          Inbox <i className="fa-solid fa-1 wd-red-color"></i>
          <i className="fa-solid fa-0 wd-red-color"></i>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-desktop wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">Studio</div>
        </div>

        <div className="row">
          <div className="col-1 text-end">
            <i className="fa-solid fa-circle-right wd-red-color"></i>
          </div>
          <div className="col text-start wd-red-color">Commons</div>
        </div>
      </div>
    </>
  );
}

export default SmallKanbasNav;
