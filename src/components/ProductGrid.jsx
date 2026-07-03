'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [products] = useState([
    {
      id: 1,
      name: 'Match Point Tennis Skirt',
      price: '₹11,300',
      image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000', '#8B4789', '#D4A574'],
      tag: null
    },
    {
      id: 2,
      name: 'Alsoah Crop Finesse Short Sleeve',
      price: '₹9,850',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000', '#FFB6C1', '#A9A9A9'],
      tag: 'BEST SELLER'
    },
    {
      id: 3,
      name: 'Goddess Ribbed Fist Pick Bra Tank Short',
      price: '₹12,800',
      image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000'],
      tag: 'BEST SELLER'
    },
    {
      id: 4,
      name: 'ALO Softsculpt High-Waist 7/8 Superset Legging',
      price: '₹7,200',
      image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000'],
      tag: 'QUICK ADD'
    },
    {
      id: 5,
      name: 'Performance Yoga Set',
      price: '₹13,500',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000', '#FFFFFF'],
      tag: null
    },
    {
      id: 6,
      name: 'Breathable Running Jacket',
      price: '₹10,200',
      image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=400&h=500&fit=crop',
      colors: ['#0BA3E8', '#000', '#FF6B9D'],
      tag: null
    }
  ])

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <div className="section-header">
          <h2 className="section-title">DISCOVER OUR LATEST DROP</h2>
          <a href="#" className="view-all-link">Shop Azure Blue</a>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .product-grid-section {
          width: 100%;
          padding: 60px 20px;
          background-color: #fff;
        }

        .product-grid-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #000;
        }

        .view-all-link {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #0BA3E8;
          text-decoration: none;
          transition: color 0.3s;
        }

        .view-all-link:hover {
          color: #0087c2;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .product-grid-section {
            padding: 40px 16px;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .section-title {
            font-size: 20px;
          }

          .products-grid {
            gap: 16px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}
