import productCopy from '../data/Product.js';

function Product() {
  return(
    <section id="product">
      <div class="product-image"></div>
      <div class="prduct-description">
        <h2>{productCopy.title}</h2>
        <div class="brown-icon-separator"></div>
        <p>{productCopy.description}</p>
      </div>
    </section>
  );
}

export default Product;
