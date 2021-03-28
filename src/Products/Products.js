import products from '../data/Products.json';
import dry_beads from '../data/dry_beads.json';
import styles from '../css/Products.css';

function Product({ info }) {
  const {name, catch_phrase, description, image} = info;
  return(
    <>
      <div className="product-image">
        <img src={image} alt={name} className="circle"/>
      </div>
      <div className="product-text">
        <h2>{name}</h2>
        <p>
          <em><b>{catch_phrase}{" "}</b></em>
          {description}
        </p>
      </div>
    </>
  );
}

function Products() {
  return (
    <section id="products">
      <h2>Our Product</h2>
      <div className="brown-icon-separator"></div>
      <div className="products-container">
      {products.map( (product, key) => {
        return (
          <div key={key} className="product-container">
            <Product info={product} />
          </div>
        )
      })}
      </div>
      <aside className="dry-beads">
        <div className="product-image">
          <img src={dry_beads.image} alt="dry_beads" className="circle"/>
        </div>
        <div className="product-text">
          <p>
            {dry_beads.description}
          </p>
        </div>
      </aside>
    </section>
  );
}

export default Products;
