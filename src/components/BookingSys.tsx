function BookingSys (){
    return(
        <div>
            <figure>
                <img src="" alt="" />
                <figcaption>
                    <form action="">
                        <h1>Book Parking</h1>
                        <section>
                            <article>
                                <label htmlFor="stDate">Start Date</label>
                                <input type="date" name="stDate" id="stDate" />
                            </article>
                            <aside>
                                <label htmlFor="stTime">Time</label>
                                <select name="stTime" id="stTime">
                                    <option value="" disabled>Time</option>
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
                        <section>
                            <article>
                                <label htmlFor="endDate">End Date</label>
                                <input type="date" name="endDate" id="endDate" />
                            </article>
                            <aside>
                                <label htmlFor="endTime">Time</label>
                                <select name="endTime" id="endTime">
                                    <option value="" disabled>Time</option>
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
                        <input type="submit" value="Search Availability"/>
                    </form>
                </figcaption>
            </figure>
        </div>
    )
}

export default BookingSys;