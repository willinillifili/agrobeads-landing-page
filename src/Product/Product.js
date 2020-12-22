import productCopy from '../data/Product.js';
import productImage from '../assets/agrobeads_product.jpg';
import productStyle from '../css/Product.css';

function Product() {
  return(
    <section id="product">
      <div className="product-image">
        <img alt="agrobeads about to be poured into plant pot"
             src={productImage}/>
      </div>
      <div className="product-description">
        <h2>{productCopy.title}</h2>
        <div class="brown-icon-separator"></div>
        <p>{productCopy.description}</p>
      </div>
    </section>
  );
}

export default Product;
