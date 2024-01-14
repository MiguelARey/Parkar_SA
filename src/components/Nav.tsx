function Nav() {
  return (
    <nav>
      <div className="corp">
        <article>
          <h2>Corporate</h2>
          <h2>Offices</h2>
        </article>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
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
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </nav>
  );
}

export default Nav;
