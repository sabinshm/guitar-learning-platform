const products = [
  { name: "Yamaha FG800J", category: "Acoustic", price: 389 },
  { name: "Fender Player Strat", category: "Electric", price: 799 },
  { name: "D'Addario Strings", category: "Accessories", price: 18 },
  { name: "Boss Katana Mini", category: "Amplifier", price: 129 },
  { name: "Korg Tuner", category: "Accessories", price: 24 },
  { name: "Guitar Stand", category: "Accessories", price: 34 },
  { name: "Capo Pro", category: "Accessories", price: 19 },
  { name: "Ibanez Artcore", category: "Electric", price: 699 },
];

export default function ShopPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Premium gear</span>
          <h1>Find the guitar and accessories that fit your sound and style.</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop-layout">
            <aside className="sidebar-panel">
              <h3>Categories</h3>
              <ul>
                <li>Acoustic guitars</li>
                <li>Electric guitars</li>
                <li>Accessories</li>
                <li>Amplifiers</li>
                <li>Strings</li>
              </ul>
            </aside>

            <div className="card-grid four-up shop-grid">
              {products.map((product) => (
                <article key={product.name} className="card product-card">
                  <span className="product-badge">Popular</span>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <div className="price-row">
                    <strong>${product.price}</strong>
                    <button>Add to cart</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
