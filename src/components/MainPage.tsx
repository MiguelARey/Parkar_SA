import Footer from "./Footer";
import Nav from "./Nav";
import Menu from "./Menu";
import MainSection from "./MainSection";
import Explorer from "./Explorer";
import LocationSect from "./LocationSect";
import News from "./News";
import { useState } from "react";

function MainPage() {
  const content = [
    {
      title: "Park with Ease",
      img: "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text1: "Discover Convenient Parking Solutions",
      text2:
        "Explore secure parking options with user-friendly facilities. Simplify your experience and park stress-free with us!",
    },
    {
      title: "Urban Oasis for Cars",
      img: "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text1: "Park, Relax, and Unwind”",
      text2:
        "Find sanctuary for your vehicle in our well-maintained spaces. Enjoy peace of mind while parking",
    },
    {
      title: "Smart Parking, Smarter Choices",
      img: "https://images.pexels.com/photos/3095798/pexels-photo-3095798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text1: "Efficient Solutions Await You",
      text2:
        "Optimize your parking experience with our smart solutions. Discover convenient, tech-driven options for stress-free parking.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="main" className={isModalOpen ? "modal-open" : ""}>
      <Nav />
      <Menu />
      <MainSection slides={content} />
      <Explorer
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <News />
      <LocationSect />
      <Footer />
    </div>
  );
}

export default MainPage;
