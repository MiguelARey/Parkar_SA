import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCarTunnel } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Slide {
  img: string;
  text1: string;
  text2: string;
  title: string;
}

interface MainSectionProps {
  slides: Slide[];
}

function MainSection({ slides }: MainSectionProps) {
  const [idx, setIdx] = useState(0);

  const prevSlide = () => {
    const checkFirst = idx === 0;
    const newIdx = checkFirst ? slides.length - 1 : idx - 1;
    setIdx(newIdx);
  };

  const nextSlide = () => {
    const checkLast = slides.length - 1 === idx;
    const newIdx = checkLast ? 0 : idx + 1;
    setIdx(newIdx);
  };

  const expSlide = (id: number) => {
    setIdx(id);
  };

  return (
    <div className="carousel">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[idx].img})` }}
      ></div>
      <article>
        <aside>
          <h1>{slides[idx].title}</h1>
          <h3>{slides[idx].text1}</h3>
          <h5>{slides[idx].text2}</h5>
        </aside>
        <a href="#">Learn More</a>
        <section>
          <FontAwesomeIcon className="leftArrow" onClick={prevSlide} icon={faAngleLeft} />
          <div className="carouselExp">
            {slides.map((item, id) => (
              <FontAwesomeIcon className={`dots ${id === idx ? 'active' : 'inactive'}`} key={id} onClick={() => expSlide(id)} icon={faCarTunnel} />
            ))}
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="rightArrow" onClick={nextSlide}/>
        </section>
      </article>
    </div>
  );
}

export default MainSection;
