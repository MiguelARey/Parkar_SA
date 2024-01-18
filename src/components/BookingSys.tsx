function BookingSys() {
  return (
    <div className="bookCont">
      <div className="bookingSec">
        <figure>
          <img
            src="https://www.findlaw.com/static/c/images/image/upload/v1678207336/aemwp-prod/Parking-Garage-Cars.jpg"
            alt="parking-pic"
          />
          <figcaption>
            <form action="">
              <h1>Book Parking</h1>
              <section>
                <article className="date">
                  <label htmlFor="stDate">Start Date</label>
                  <input type="date" name="stDate" id="stDate" />
                </article>
                <aside className="time">
                  <label htmlFor="stTime">Time</label>
                  <select name="stTime" id="stTime">
                    <option value="" disabled>
                      Time
                    </option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                  </select>
                </aside>
              </section>
              <section className="endDate">
                <article>
                  <label htmlFor="endDate">End Date</label>
                  <input type="date" name="endDate" id="endDate" />
                </article>
                <aside>
                  <label htmlFor="endTime">Time</label>
                  <select name="endTime" id="endTime">
                    <option value="" disabled>
                      Time
                    </option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                    <option value="07:00">07:00</option>
                  </select>
                </aside>
              </section>
              <input type="submit" value="Search Availability" />
            </form>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default BookingSys;
