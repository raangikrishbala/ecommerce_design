'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="/">OneHub Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/marketplace">Marketplace</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/product">Product</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/profile">Profile</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
