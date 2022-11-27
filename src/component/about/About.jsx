import "./about.css";
import Product from "../product/Product";
import { products } from "../../data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="fade-left" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Achievment and certification</h1>
        <p className="pl-desc">
          certificates of achievement obtained through participation in the
          various scientific events
        </p>
      </div>

      <div className="pl-list" data-aos="slide-up">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            desc={item.desc}
            title={item.title}
            link={item.link}
            top={item.top}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
