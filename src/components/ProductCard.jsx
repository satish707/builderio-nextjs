'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  const [showSizeModal, setShowSizeModal] = useState(false)

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={500}
          className="product-image"
        />
        
        {product.tag && (
          <span className={`product-tag tag-${product.tag.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.tag}
          </span>
        )}

        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to favorites"
        >
          <svg className="heart-icon" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="color-swatches">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className="color-swatch"
              style={{ backgroundColor: color }}
              aria-label={`Color ${index + 1}`}
              title={color}
            />
          ))}
        </div>

        <p className="product-price">{product.price}</p>

        <button 
          className="add-to-cart-button"
          onClick={() => setShowSizeModal(true)}
        >
          ADD TO CART
        </button>
      </div>

      {showSizeModal && (
        <div className="size-modal-overlay" onClick={() => setShowSizeModal(false)}>
          <div className="size-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal"
              onClick={() => setShowSizeModal(false)}
            >
              ✕
            </button>
            <h3>Select Size</h3>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedSize(size)
                    setTimeout(() => setShowSizeModal(false), 300)
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .product-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
        }

        .product-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          background-color: #f5f5f5;
          margin-bottom: 12px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 6px 10px;
          border-radius: 2px;
          z-index: 5;
        }

        .tag-best-seller {
          background-color: #0BA3E8;
          color: #fff;
        }

        .tag-new {
          background-color: #fff;
          color: #000;
          border: 1px solid #000;
        }

        .tag-quick-add {
          background-color: #000;
          color: #fff;
        }

        .favorite-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }

        .favorite-button:hover {
          background-color: #fff;
          transform: scale(1.1);
        }

        .favorite-button.active {
          color: #e74c3c;
        }

        .heart-icon {
          width: 18px;
          height: 18px;
        }

        .product-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 8px;
          color: #000;
        }

        .color-swatches {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .color-swatch:hover {
          transform: scale(1.15);
          border-color: #999;
        }

        .product-price {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #000;
        }

        .add-to-cart-button {
          width: 100%;
          padding: 12px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s;
          color: #000;
        }

        .add-to-cart-button:hover {
          background-color: #e0e0e0;
          border-color: #999;
        }

        .size-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .size-modal {
          background-color: #fff;
          padding: 24px;
          border-radius: 8px;
          max-width: 400px;
          width: 90%;
          position: relative;
        }

        .close-modal {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
        }

        .size-modal h3 {
          margin-bottom: 16px;
          font-size: 16px;
          font-weight: 600;
        }

        .size-options {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        .size-option {
          padding: 12px;
          border: 1px solid #ddd;
          background-color: #fff;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .size-option:hover {
          border-color: #000;
        }

        .size-option.selected {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }

        @media (max-width: 768px) {
          .product-image-container {
            margin-bottom: 8px;
          }

          .product-name {
            font-size: 12px;
          }

          .add-to-cart-button {
            padding: 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
