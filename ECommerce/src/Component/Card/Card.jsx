import "./Card.css";

function Crad({ data }) {
  const { image, title, price, rating } = data;
  return (
    <div className="card">
      <div className="imgWrapper">
        <img src={image} alt="prodcut-img" width="100%" height="100%" />
      </div>
      <div className="contentwrapper">
        <h5>{title}</h5>
        <p>${price}</p>
        <p>{rating.rate}</p>
      </div>
      <div className="button-wrapper">
        <button>Add to Cart</button>
        <button>More Details</button>
      </div>
    </div>
  );
}

export default Crad;
