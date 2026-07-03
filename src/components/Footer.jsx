import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className="footer-title">SHOP</h4>
            <ul className="footer-links">
              <li><Link href="/">Women</Link></li>
              <li><Link href="/">Men</Link></li>
              <li><Link href="/">Shoes</Link></li>
              <li><Link href="/">Accessories</Link></li>
              <li><Link href="/">Sale</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">CUSTOMER CARE</h4>
            <ul className="footer-links">
              <li><Link href="/">Contact Us</Link></li>
              <li><Link href="/">Size Guide</Link></li>
              <li><Link href="/">Shipping & Returns</Link></li>
              <li><Link href="/">Track Order</Link></li>
              <li><Link href="/">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">ABOUT</h4>
            <ul className="footer-links">
              <li><Link href="/">About ALO</Link></li>
              <li><Link href="/">Sustainability</Link></li>
              <li><Link href="/">Careers</Link></li>
              <li><Link href="/">Press</Link></li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">CONNECT</h4>
            <ul className="footer-links">
              <li><Link href="/">Instagram</Link></li>
              <li><Link href="/">Facebook</Link></li>
              <li><Link href="/">Twitter</Link></li>
              <li><Link href="/">TikTok</Link></li>
              <li><Link href="/">Pinterest</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 ALO Yoga. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Settings</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
          color: #fff;
          padding: 60px 20px 40px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-size: 12px;
          color: #999;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: #999;
          text-decoration: none;
          font-size: 12px;
          transition: color 0.3s;
        }

        .footer-bottom-links a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 16px 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  )
}
