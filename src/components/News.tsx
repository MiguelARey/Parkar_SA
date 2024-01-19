function News() {
  return (
    <div className="news">
      <figure>
        <img
          src="https://images.pexels.com/photos/6703176/pexels-photo-6703176.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="news-pic"
        />
        <figcaption>
          <h4>NEWSLETTER SIGN UP</h4>
          <h1>Unlock exclusive parking offers. Subscribe now!</h1>
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />

            <input type="submit" value="Sign Up" />
          </form>
        </figcaption>
      </figure>
    </div>
  );
}

export default News;
