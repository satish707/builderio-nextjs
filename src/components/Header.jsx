'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      {/* Promo Banner */}
      <div className="promo-banner">
        <p>COMPLIMENTARY SHIPPING OVER $5,000</p>
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <span className="font-bold text-xl">alo</span>
          </Link>

          <div className="menu-items">
            <Link href="/">WOMEN</Link>
            <Link href="/">MEN</Link>
            <Link href="/">SHOES</Link>
            <Link href="/">ATELIER</Link>
          </div>

          <div className="nav-actions">
            <button aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="rewards-btn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>SIGN IN TO GET REWARDS</span>
            </button>
            <button aria-label="Favorites">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/">WOMEN</Link>
            <Link href="/">MEN</Link>
            <Link href="/">SHOES</Link>
            <Link href="/">ATELIER</Link>
          </div>
        )}
      </nav>

      <style jsx>{`
        .promo-banner {
          background-color: #7DD3FC;
          color: #000;
          text-align: center;
          padding: 12px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .nav-container {
          background-color: #fff;
          border-bottom: 1px solid #f0f0f0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          gap: 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #000;
          white-space: nowrap;
        }

        .menu-items {
          display: flex;
          gap: 32px;
          flex: 1;
          margin-left: 24px;
        }

        .menu-items a {
          text-decoration: none;
          color: #000;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }

        .menu-items a:hover {
          opacity: 0.6;
        }

        .nav-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .nav-actions button {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #000;
          font-size: 12px;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .nav-actions button:hover {
          opacity: 0.6;
        }

        .rewards-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #000;
          font-size: 13px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .menu-items {
            display: none;
          }

          .nav-actions {
            gap: 8px;
          }

          .rewards-btn span {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }

          .nav-wrapper {
            height: auto;
            padding: 12px 16px;
          }
        }
      `}</style>
    </header>
  )
}
