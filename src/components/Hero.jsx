import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column - Product Image */}
        <div className="hero-left">
          <div className="hero-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=500&h=700&fit=crop"
              alt="Azure Blue Collection - Hooded Top"
              width={500}
              height={700}
              priority
              className="hero-image"
            />
            <span className="new-drop-badge">NEW DROP</span>
          </div>
        </div>

        {/* Center Column - Collection Info */}
        <div className="hero-center">
          <div className="collection-info">
            <h1 className="collection-title">Azure Blue</h1>
            <p className="collection-subtitle">
              INSPIRED BY CLEAR SKIES, COOL WATERS
              <br />
              AND ENDLESS HOURS AFTER SEA
            </p>
            <Image
              src="https://images.unsplash.com/photo-1518611505868-48aab195c479?w=600&h=400&fit=crop"
              alt="Azure Blue Collection - Beach Scene"
              width={600}
              height={400}
              className="hero-showcase-image"
            />
          </div>
        </div>

        {/* Right Column - Secondary Images */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1506629082847-11d3e392e467?w=400&h=600&fit=crop"
              alt="Azure Blue Collection - Details"
              width={400}
              height={600}
              className="hero-image"
            />
          </div>
          <button className="shop-button">SHOP NEW IN</button>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          width: 100%;
          padding: 40px 20px;
          background-color: #f8f8f8;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .hero-left,
        .hero-right {
          display: flex;
          flex-direction: column;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .new-drop-badge {
          position: absolute;
          bottom: 24px;
          left: 20px;
          background-color: #fff;
          color: #000;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          z-index: 10;
        }

        .hero-center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          text-align: center;
        }

        .collection-info {
          width: 100%;
        }

        .collection-title {
          font-size: 48px;
          font-weight: 400;
          margin-bottom: 24px;
          font-style: italic;
          color: #333;
        }

        .collection-subtitle {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 1.8;
          margin-bottom: 32px;
          color: #666;
          text-transform: uppercase;
        }

        .hero-showcase-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .hero-right {
          gap: 20px;
        }

        .shop-button {
          background-color: #000;
          color: #fff;
          border: none;
          padding: 16px 24px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background-color 0.3s;
          align-self: flex-start;
          margin-top: auto;
        }

        .shop-button:hover {
          background-color: #333;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .hero-center {
            grid-column: 1 / -1;
            padding: 30px 20px;
          }

          .collection-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 24px 16px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .hero-center {
            padding: 24px 16px;
          }

          .collection-title {
            font-size: 28px;
          }

          .collection-subtitle {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  )
}
