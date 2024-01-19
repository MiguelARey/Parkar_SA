import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  const [bgClass, setBgClass] = useState("burger-bar unclicked");
  const [menuSched, setMenuSched] = useState("navMenu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBgClass("burger-bar clicked");
      setMenuSched("navBurger visible");
    } else {
      setBgClass("burger-bar unclicked");
      setMenuSched("navBurger hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="bHeader">
      <nav id="header">
        <div className="corp">
          <article>
            <a className="hLink" href="#">
              Corporate
            </a>
            <a className="hLink" href="#">
              Offices
            </a>
          </article>
          <div className="bMenu" onClick={updateMenu}>
            <div>
              <div className={bgClass}></div>
              <div className={bgClass}></div>
              <div className={bgClass}></div>
            </div>
            <h4>Schedule</h4>
          </div>
          <div className={menuSched}>
          <article>
              <aside>Monday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Tueday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Wednesday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Thursday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Friday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Saturday</aside>
              <p>07:00 AM - 07:00 PM</p>
            </article>
            <article>
              <aside>Sunday</aside>
              <p className="closed">CLOSED</p>
            </article>
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
