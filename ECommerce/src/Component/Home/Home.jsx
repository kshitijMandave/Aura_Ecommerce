import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <div id="aura-welcome-section">
          <h2 className="primary-clr">Welcome to, Aura!</h2>
          <p className="primary-clr">
            At Aura, we believe in blending timeless craftsmanship with modern
            trends. From stunning outfits to unique accessories, every piece is
            designed to make you shine.
          </p>
          <button onClick={() => (window.location.href = "/products")}>
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
