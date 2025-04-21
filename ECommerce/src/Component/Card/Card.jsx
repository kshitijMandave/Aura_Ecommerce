import "./Card.css";
import { Link } from "react-router-dom";

function Crad({ data }) {
  const { image, title, price, rating, id } = data;

  // Function to render stars
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i}>★</span>); // full star
      } else {
        stars.push(<span key={i}>☆</span>); // empty star
      }
    }

    return stars;
  };

  return (
    <div className="card">
      <div className="imgWrapper">
        <img src={image} alt="product-img" width={"100%"} height={"100%"} />
      </div>

      <div className="contentwrapper">
        <h5>{title}</h5>
        <p>₹ {price}</p>
        <div className="stars">{renderStars(rating.rate)}</div>
      </div>

      <div className="button-wrapper">
        <button>Add to Cart</button>
        <Link to={`/productdetials/${id}`}>
          <button>Product Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Crad;
