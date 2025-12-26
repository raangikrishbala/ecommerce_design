export default function ProductPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="/assets/sample-1.jpg" className="img-fluid" alt="Product" />
        </div>
        <div className="col-md-6">
          <h2>Product Title</h2>
          <p className="lead">Product short description — preserved markup and classes.</p>
          <p>Price: <strong>$199</strong></p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
