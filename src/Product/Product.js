import productCopy from '../data/Product.js';
import productImage from '../assets/agrobeads_product.jpg';

function Product() {
  return(
    <section id="product">
      <div class="product-image">
        <img alt="agrobeads about to be poured into plant pot"
             src={productImage}/>
      </div>
      <div class="prduct-description">
        <h2>{productCopy.title}</h2>
        <div class="brown-icon-separator"></div>
        <p>{productCopy.description}</p>
      </div>
    </section>
  );
}

export default Product;
