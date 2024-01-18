import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <div className="bHeader">
      <nav id="header">
        <div className="corp">
          <article>
            <a className="hLink" href="#">Corporate</a>
            <a className="hLink" href="#">Offices</a>
          </article>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle" 
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Schedule
            </a>

            <ul className="dropdown-menu">
              <li>
                <aside>Monday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Tuesday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Wednesday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Thursday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Friday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Saturday</aside>
                <p>07:00 AM - 07:00 PM</p>
              </li>
              <li>
                <aside>Sunday</aside>
                <p>CLOSED</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialm">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
