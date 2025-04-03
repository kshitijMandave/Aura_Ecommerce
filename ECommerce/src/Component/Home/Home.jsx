import "./Home.css";
function Home() {
  return (
    <div>
      <section class="hero">
        <div id="aura-welcome-section">
          <h2 class="primary-clr">Welcome to, Aura!</h2>
          <p class="primary-clr">
            At Aura, we believe in blending timeless craftsmanship with modern
            trends. From stunning outfits to unique accessories, every piece is
            designed to make you shine.
          </p>
          <button onclick="goToProducts()">Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
