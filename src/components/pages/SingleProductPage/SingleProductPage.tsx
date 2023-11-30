const SingleProductPage = () => {
  return (
    <div className="single__product--container">
      <div className="single__product--content">
        <div className="single__product--image">
          <img src="" alt="" />
        </div>
        <div className="single__product--info">
          <div className="product__name">Product Name</div>
          <p className="product__material">Product Material</p>
          <p className="product__price">Product Price</p>
          <p className="product__vat">Tax included</p>
          <div className="product__quantity">
            <p>Quantity</p>
            <p>Counter with + -</p>
          </div>
          <button>Add to cart</button>
          <div className="description">
            <p>Product description separated at . and list with bullet point</p>
          </div>
        </div>
      </div>
      <div className="suggestions__container">Product Suggestions</div>
    </div>
  );
};

export default SingleProductPage;
