import "./Media.css";

function Media() {
  return (
    <div className="media">
      <div className="media-container">
        <div className="left">
          <ul className="left-items">
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Stream</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Plays</a>
            </li>
            <li>
              <a href="">Sports</a>
            </li>
            <li>
              <a href="">Activities</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="right-items">
            <li>
              <a href="">ListYourShow</a>
            </li>
            <li>
              <a href="">Corporates</a>
            </li>
            <li>
              <a href="">Offers</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Sports</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Media;
