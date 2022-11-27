import "./product.css";

const Product = ({ img, link, title, desc, top }) => {
  return (
    <>
      <div className={`p ${top}`}>
        <img src={img} alt="" className={`p-img ${top}`}></img>

        <div className={`desc ${top}`}>
          <h2> {title}</h2>

          <p className="detaildesc">{desc}</p>
          <a
            href={link}
            className="view online"
            target="_blank"
            rel="noreferrer"
          >
            View Online
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
