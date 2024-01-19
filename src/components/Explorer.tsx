import { useState } from "react";

interface ExplorerProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface Company {
  id: number;
  name: string;
  picture: string;
  url: string;
  text: string;
}

function Explorer({ isModalOpen, openModal, closeModal }: ExplorerProps) {
  const companies = [
    {
      id: 1,
      name: "Lululemon",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png",
      url: "https://shop.lululemon.com/en-ca/",
      text: "Find the Latest Gear — No Matter What the Adventure Salomon® Has Got You Covered. Shop the Full Collection Now. Exclusive Colours & Styles Available. Shop the Latest Collection Now. Official Site. Largest Online Selection. Shop the Salomon Outlet. Types: Skiing, Snowboarding, Running.",
    },
    {
      id: 2,
      name: "Starbucks",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
      url: "https://www.starbucks.ca/",
      text: "We like to say that we are not in the coffee business serving people, but in the people business serving coffee. Our employees – who we call partners – are at the heart of the Starbucks experience. We are committed to making our partners proud and investing in their health, well-being and success and to creating a culture of belonging where everyone is welcome.",
    },
    {
      id: 3,
      name: "MacDonalds",
      picture:
        "https://seeklogo.com/images/M/mcdonald-s-logo-2325D6C1EF-seeklogo.com.png",
      url: "https://www.mcdonalds.com/ca/en-ca.html",
      text: "Whatever your go-to menu item or favourite order is, we’ve always strived to serve the great-tasting, quality food you know and love. We believe in supporting Canadian farmers, sourcing quality ingredients like beef, potatoes, dairy and freshly cracked Canada Grade A eggs. ",
    },
    {
      id: 4,
      name: "H&M",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png",
      url: "https://www2.hm.com/en_ca/index.html",
      text: "We are committed to meeting all external regulations where we do business and to doing the right thing. Acting consistently and with a strong ethical compass is vital if H&M Group is to continue being a trusted company and partner, a company that is valued by customers, respected by society, and for which we are all proud to work",
    },
    {
      id: 5,
      name: "P&G",
      picture: "https://cdn-icons-png.flaticon.com/256/6132/6132223.png",
      url: "https://pyg.org/",
      text: "Our brands are trusted in millions of living rooms, kitchens, laundry rooms, and bathrooms—and have been passed down from generation to generation. We are the people behind the brands you trust, and we’re committed to making peoples’ lives better in small but meaningful ways, every day.",
    },
    {
      id: 6,
      name: "TimHortons",
      picture:
        "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/168/168197/168197.png?filename=Tim_Hortons_Maple_Leaf.png",
      url: "https://www.timhortons.com/",
      text: "We have always had a deep connection to our communities and our guests from coast to coast. Our more than 1,500 restaurant owners are Canadians who live in communities across the country employing over 100,000 people. Our local Owners and their teams care deeply about the communities they serve. That’s why we provide over $60 million per year to organizations and communities throughout Canada. From signature programs like Timbits® Sports and the Tim Hortons Foundation Camps, we invest in community projects and initiatives big and small.",
    },
    {
      id: 7,
      name: "RedBull",
      picture:
        "https://cdn.freebiesupply.com/logos/large/2x/red-bull-1-logo-svg-vector.svg",
      url: "https://www.redbull.com/ca-en/",
      text: "Discover The World Of Red Bull® And Beyond, Including Motorsports, Bike, Snow, Surf, More. Giving Wings To People & Ideas. Learn More About Red Bull® Energy Drinks Today. Canadian Red Bull Events.",
    },
    {
      id: 8,
      name: "Sephora",
      picture:
        "https://1000logos.net/wp-content/uploads/2018/08/Sephora-Logo.png",
      url: "https://www.sephora.com/?country_switch=ca&lang=en",
      text: "Sephora is a leader in global prestige retail, teaching and inspiring clients to play in a world of beauty. Owned by LVMH Moët Hennessy Louis Vuitton, the worlds leading luxury goods group, Sephora has earned its reputation as a beauty trailblazer with its expertise, innovation, and entrepreneurial spirit.",
    },
    {
      id: 9,
      name: "Jeep",
      picture:
        "https://1000logos.net/wp-content/uploads/2018/04/Jeep-Logo-1970-1.png",
      url: "https://www.jeep.ca/en",
      text: "Discover more about the Jeep lineup. Explore the Jeep Wrangler, Renegade, Compass, Cherokee & Grand Cherokee. Build and price your Jeep today.",
    },
    {
      id: 10,
      name: "H&H",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/HH_Train_%281967-1972%29.svg/2048px-HH_Train_%281967-1972%29.svg.png",
      url: "https://www.hellyhansen.com/en_ca/",
      text: "Fast Shipping, Secure Checkout — Buy Skiing, Sailing & Outdoor Clothing. Professional Grade Gear & Innovative Technologies. Save Up To 50% Off On Kids & Juniors Helly Hansen® Apparel Online Now. Dont Miss...",
    },
    {
      id: 11,
      name: "Burton",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Burton_Snowboards-OYyvWGgtX_brandlogos.net.svg/512px-Burton_Snowboards-OYyvWGgtX_brandlogos.net.svg.png",
      url: "https://www.burton.com/ca/en/home?g_adtype=search&g_acctid=225-904-7832&g_campaign=Burton%20Brand%20(CA)&g_campaignid=346546634&g_adgroupid=25529994914&g_adid=283418963267&g_keyword=burton&g_keywordid=kwd-15036720&g_network=g&gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhISCH7-iAJuiOgHi8IGenotPRBFVfOhoY7UfJAulDtZvtjV0XVV8U0aAo0QEALw_wcB&gclsrc=aw.ds",
      text: "Free Shipping Available — Shop Burton.com for the latest jackets, clothing, bags, snowboard gear, and more. Shop Burton.com for mens, womens and kid clothing, bags, and snowboard gear. Durable Goods. Easy Mobile Checkout. Mobile Friendly Website. Official Burton Website.",
    },
    {
      id: 12,
      name: "Salomon",
      picture:
        "https://cdn.freebiesupply.com/logos/large/2x/salomon-logo-png-transparent.png",
      url: "https://www.salomon.com/en-ca?CMPID=ps%7Csb%7Cgoogle%7CSLM_Branding-ONG-ECM-CA_SEA_B_LW_BRM%7CSalomon%7Csalomon%7C526651185030&utm_source=google&utm_medium=paidsearch&utm_content=aa92269850297-cc526651185030&utm_keyword=salomon&utm_campaign=SLM_Branding-ONG-ECM-CA_SEA_B_LW_BRM&gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhKP8yCNmpUBXRvboQnKP97LENQy3sGWh_nE1DCFblvpUBCSfo7grHEaAmWIEALw_wcB&gclsrc=aw.ds",
      text: "SALOMON International: Sporting goods for men, women and children. Ski boots and clothing. Snowboarding, trail running and hiking clothes & shoes.",
    },
    {
      id: 13,
      name: "K2",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/K2_Sports_logo.svg/1200px-K2_Sports_logo.svg.png",
      url: "https://k2snow.com/en-ca/?gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhIo3y7ChVTaDHXULwFuUAQSwsi60aqdn5twGN2r8FT4JEbFYjR1BOoaAj7jEALw_wcB",
      text: "Steady Innovation Since 1987 - Boards, Boots, & Bindings For All Types of Riding. New Boards, Boots, Bindings, & So Much More. World-Renowned Quality. K2 Ski Warranty.",
    },
    {
      id: 14,
      name: "KFC",
      picture:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      url: "https://www.kfc.ca/menu/limited-time-offers?gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhIneAq-74piaJeKyqWhhyInbTxskuA6GX2KP8n69XLjiK_RllIRkNgaAvlqEALw_wcB&gclsrc=aw.ds",
      text: "Click to see the latest KFC Menu & Offers today. Order KFC online for Delivery, Pick Up & Dine-In or download our KFC App for easy ordering.",
    },
  ];

  const [selectedCompany, SetSelectedCompany] = useState<Company | null>(null);

  const handleCompanyClick: React.MouseEventHandler<HTMLElement> = (event) => {
    const companyId = Number(event.currentTarget.dataset.companyId);
    const clickedCompany = companies.find(
      (company) => company.id === companyId
    );

    if (clickedCompany) {
      SetSelectedCompany(clickedCompany);
      openModal();
    }
  };

  return (
    <div className="galCont">
      <div className="galSection">
        <aside>
          <h2>Health, Hospitality and more</h2>
          <h3>Explore all your solutions at Parking PARKAR</h3>
        </aside>
        <section className="gallery">
          {companies.map((item) => (
            <figure
              key={item.id}
              className="open-button"
              onClick={handleCompanyClick}
              data-company-id={item.id}
            >
              <img src={item.picture} alt={item.name} />
            </figure>
          ))}
        </section>
      </div>
      {isModalOpen && <div className="modal-overlay"></div>}
      <dialog open={isModalOpen} className="newModal">
        {selectedCompany && (
          <div className="modalContainer">
            <h1>{selectedCompany.name}</h1>
            <figure>
              <img src={selectedCompany.picture} alt='brand-pic'/>
              <figcaption>
                <p>{selectedCompany.text}</p>
              </figcaption>
            </figure>
            <article>
              <a href={selectedCompany.url}>Visit Page</a>
              <button className="button button-close" onClick={closeModal}>
                Close
              </button>
            </article>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default Explorer;
