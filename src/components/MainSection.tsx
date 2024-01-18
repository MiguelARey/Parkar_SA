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
      <div className="leftArrow" onClick={prevSlide}>
        &#8592;
      </div>
      <div className="rightArrow" onClick={nextSlide}>
        &#x2192;
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[idx].img})` }}
      ></div>
      <article>
        <h1>
        {slides[idx].title}
        </h1>
        <h3>
        {slides[idx].text1}
        </h3>
        <h5>
        {slides[idx].text2}
        </h5>
      </article>
      <div className="carouselExp">
        {slides.map((item, id) => (
          <div className="dots" key={id} onClick={()=>expSlide(id)}>
            &#x2022;
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
