export default function ProductCard({ title = 'Product', img = '/assets/sample-1.jpg' }: { title?: string; img?: string }) {
  return (
    <div className="card mb-4">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Short description</p>
        <a href="/product" className="btn btn-primary">View</a>
      </div>
    </div>
  )
}
