function Explorer() {
  const companies = [
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    },
    {
      name: "company1",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
    }
  ];

  return (
    <div className="galCont">
      <div className="galSection">
        <aside>
          <h2>Health, Hospitality and more</h2>
          <h3>Explore all your solutions at Parking PARKAR</h3>
        </aside>
        <section className="gallery">
          {companies.map((item) => (
            <figure>
              <img src={item.picture} alt={item.name} />
            </figure>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Explorer;
