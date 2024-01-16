import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="fContainer">
      <div id="footer">
        <div className="contact">
          <div className="icon">
            <figure>
              <a href="#header">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3660/3660407.png"
                  alt="logo-f"
                />
              </a>
              <figcaption>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="fmenu">
            <h3>Parkar SA</h3>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
            <a href="#">link 1</a>
          </div>
          <div className="links">
            <h3>Header 2</h3>
            <a href="#">link 2</a>
            <a href="#">link 2</a>
            <a href="#">link 2</a>
          </div>
          <div className="fschedule">
            <h3>Parkar Schedule</h3>
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
              <p>CLOSED</p>
            </article>
          </div>
        </div>
        <footer>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ab?</p>
          <article>
            <a href="#">Privacy Policy</a>
            <a href="#">Accesability</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Preference Center</a>
          </article>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
