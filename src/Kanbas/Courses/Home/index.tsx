import ModuleList from "../Modules/List";
import Modules from "../Modules";
import "/node_modules/font-awesome/css/font-awesome.min.css";

function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
      />
      {/* <ModuleList /> */}
      <div className="row m-1">
        <div className="col-9">
          <Modules />
        </div>
        <div className="col-3">
          <div className="sidebar">
            <div className="wd-course-status-container">
              <p className="wd-black-color">Course Status</p>
              <div className="wd-course-status-buttons-container">
                <button type="button" className="btn btn-sm">
                  <i className="fa-solid fa-ban"></i> Unpublish
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  disabled
                >
                  <i className="fa-solid fa-circle-check"></i> Published
                </button>
              </div>
            </div>
            <div className="wd-course-status-buttons-container-rows wd-margin-top-10">
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-10 text-start"
              >
                <i className="fa-solid fa-file-import"></i>
                Import Existing Content
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-regular fa-circle-right"></i> Import from
                Commons
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-regular fa-life-ring"></i> Choose Home Page
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-solid fa-chart-column"></i> View Course Stream
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-solid fa-bullhorn"></i> New Announcement
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-solid fa-chart-column"></i> New Analytics
              </button>
              <button
                type="button"
                className="btn btn-sm btn-block wd-margin-top-5 text-start"
              >
                <i className="fa-regular fa-bell"></i> View Course Notifications
              </button>
            </div>
          </div>
          <div className="wd-margin-top-10">
            <p>To Do</p>
            <hr />

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 wd-red-color">
                  <i className="fa-solid fa-1"></i>
                </div>
                <div className="col-md-10">
                  <a
                    href="#"
                    className="wd-red-color wd-remove-text-decoration wd-red-color wd-font-size-14"
                  >
                    Grade A1 - ENV + HTML
                  </a>
                  <br />
                  <div className="wd-gray-color wd-font-size-12">
                    100 points • Sep 18 at 11:59pm
                  </div>
                </div>
              </div>
            </div>

            <div className="wd-margin-top-10 wd-display-flex wd-align-center">
              <span className="wd-font-size-14">Coming Up</span>
              <div className="wd-red-color">
                <a
                  href="#"
                  className="wd-red-color wd-remove-text-decoration wd-font-size-14 wd-margin-left-40"
                >
                  <i className="fa-regular fa-calendar-days"></i> View Calendar
                </a>
              </div>
            </div>
            <hr />

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 wd-red-color">
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div className="col-md-10">
                  <a
                    href="#"
                    className="wd-red-color wd-remove-text-decoration wd-red-color wd-font-size-14"
                  >
                    Lecture
                  </a>
                  <br />
                  <div className="wd-gray-color wd-font-size-12">
                    CS4550.12631.202410 <br />
                    Sep 11 at 11:45am
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2 wd-red-color">
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div className="col-md-10">
                  <a
                    href="#"
                    className="wd-red-color wd-remove-text-decoration wd-red-color wd-font-size-14"
                  >
                    CS5610 06 SP23 Lecture
                  </a>
                  <br />
                  <div className="wd-gray-color wd-font-size-12">
                    CS4550.12631.202410 <br />
                    Sep 11 at 6pm
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2 wd-red-color">
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div className="col-md-10">
                  <a
                    href="#"
                    className="wd-red-color wd-remove-text-decoration wd-red-color wd-font-size-14"
                  >
                    CS5610 Web Development Summer 1 2023 - LECTURE
                  </a>
                  <br />
                  <div className="wd-gray-color wd-font-size-12">
                    CS4550.12631.202410 <br />
                    Sep 11 at 7pm
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <a
                    href="#"
                    className="wd-red-color wd-remove-text-decoration wd-red-color wd-font-size-14"
                  >
                    12 more in the next week ...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
