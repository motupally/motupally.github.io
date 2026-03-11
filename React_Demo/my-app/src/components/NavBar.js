import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#ffffff" />
      <path d="M6 12h12" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16h12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8h12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom o" style={{backgroundColor: 'var(--nav-bg)'}}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="me-2 App-logo"style={{display:'inline-flex', alignItems:'center'}}><Logo /></span>
          <span >MyApp</span>
        </Link>
        <button className="navbar-toggler App-logo" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
