import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaDesktop,
  FaArrowAltCircleRight,
  FaQuestionCircle,
  FaNeos,
} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "       ", icon: <FaNeos className="fs-2 wd-red-color" /> },
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2 wd-red-color" />,
    },
    { label: "Courses", icon: <FaBook className="fs-2 wd-red-color" /> },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt className="fs-2 wd-red-color" />,
    },
    {
      label: "Inbox",
      icon: <FaInbox className="fs-2 wd-red-color" />,
    },
    {
      label: "History",
      icon: <FaRegClock className="fs-2 wd-red-color" />,
    },
    {
      label: "Studio",
      icon: <FaDesktop className="fs-2 wd-red-color" />,
    },
    {
      label: "Commons",
      icon: <FaArrowAltCircleRight className="fs-2 wd-red-color" />,
    },
    {
      label: "Help",
      icon: <FaQuestionCircle className="fs-2 wd-red-color" />,
    },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;
