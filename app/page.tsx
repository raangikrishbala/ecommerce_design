export default function HomePage() {
  return (
    <div>
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5">Welcome to the Store</h1>
          <p className="lead">Converted home page from the HTML design.</p>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/assets/sample-1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Sample Product 1</h5>
                <p className="card-text">Brief description preserved from original design.</p>
                <a href="/product" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/assets/sample-2.jpg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Sample Product 2</h5>
                <p className="card-text">Brief description preserved from original design.</p>
                <a href="/product" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/assets/sample-3.jpg" className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Sample Product 3</h5>
                <p className="card-text">Brief description preserved from original design.</p>
                <a href="/product" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
