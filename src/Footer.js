import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerLinks = {
    Shop: ["Men's Collection", "Women's Collection", "Kids' Fashion", "Sale Items", "New Arrivals"],
    Help: ["Track My Order", "Returns & Exchanges", "Size Guide", "FAQs", "Contact Us"],
    Company: ["About LuxeCart", "Careers", "Press", "Sustainability", "Affiliates"],
  };

  const paymentIcons = ["VISA", "MC", "JCB", "COD"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #141414;
          --card: #111111;
          --accent: #c9a96e;
          --accent-light: #e8c98a;
          --text: #f0ede8;
          --muted: #888;
          --border: rgba(201,169,110,0.15);
          --border-dim: rgba(255,255,255,0.06);
        }

        .footer-wrapper {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
        }

        /* ── FEATURES STRIP ── */
        .features-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 28px 32px;
          border-right: 1px solid var(--border-dim);
          transition: background 0.3s;
        }

        .feature-item:last-child { border-right: none; }
        .feature-item:hover { background: rgba(201,169,110,0.04); }

        .feature-icon {
          width: 44px;
          height: 44px;
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(201,169,110,0.06);
        }

        .feature-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--accent);
          fill: none;
          stroke-width: 1.5;
        }

        .feature-text h4 {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 3px;
          letter-spacing: 0.3px;
        }

        .feature-text p {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.5;
        }

        /* ── NEWSLETTER CTA ── */
        .newsletter-section {
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
          text-align: center;
          background: linear-gradient(135deg, #0f0f0f 0%, #1c1608 50%, #0f0f0f 100%);
          border-bottom: 1px solid var(--border);
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 100% at 50% 60%, rgba(201,169,110,0.09) 0%, transparent 70%);
          pointer-events: none;
        }

        .nl-eyebrow {
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
          position: relative;
        }

        .nl-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.15;
          margin-bottom: 14px;
          position: relative;
        }

        .nl-title span { color: var(--accent); }

        .nl-subtitle {
          color: var(--muted);
          font-size: 14px;
          max-width: 420px;
          margin: 0 auto 36px;
          line-height: 1.7;
          position: relative;
        }

        .nl-form {
          display: flex;
          justify-content: center;
          gap: 0;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
        }

        .nl-input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-right: none;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 20px;
          border-radius: 4px 0 0 4px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .nl-input::placeholder { color: var(--muted); }

        .nl-input:focus {
          border-color: rgba(201,169,110,0.5);
          background: rgba(255,255,255,0.07);
        }

        .nl-btn {
          background: var(--accent);
          color: #0a0a0a;
          border: none;
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .nl-btn:hover { background: var(--accent-light); }

        .nl-success {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
          position: relative;
        }

        .nl-success svg {
          width: 20px;
          height: 20px;
          stroke: var(--accent);
          fill: none;
          stroke-width: 2;
        }

        .nl-note {
          margin-top: 14px;
          font-size: 11px;
          color: var(--muted);
          position: relative;
        }

        /* ── MAIN FOOTER ── */
        .footer-main {
          padding: 64px 40px 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          border-bottom: 1px solid var(--border-dim);
        }

        /* Brand col */
        .footer-brand .logo {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 16px;
          display: block;
          text-decoration: none;
        }

        .footer-brand .logo span { color: var(--accent); }

        .footer-brand p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
          max-width: 260px;
          margin-bottom: 28px;
        }

        /* Social icons */
        .socials {
          display: flex;
          gap: 10px;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: none;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
        }

        .social-btn:hover {
          border-color: var(--accent);
          background: rgba(201,169,110,0.1);
        }

        .social-btn svg {
          width: 15px;
          height: 15px;
          stroke: var(--muted);
          fill: none;
          stroke-width: 1.5;
          transition: stroke 0.2s;
        }

        .social-btn:hover svg { stroke: var(--accent); }

        /* Link columns */
        .footer-col h5 {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-dim);
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
        }

        .footer-col a:hover {
          color: var(--accent-light);
          padding-left: 4px;
        }

        /* ── FOOTER BOTTOM ── */
        .footer-bottom {
          padding: 24px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 12px;
          color: var(--muted);
        }

        .footer-copy span { color: var(--accent); }

        /* Payment badges */
        .payment-methods {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .pay-badge {
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--muted);
          background: var(--surface);
          transition: border-color 0.2s, color 0.2s;
        }

        .pay-badge:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .footer-legal {
          display: flex;
          gap: 20px;
        }

        .footer-legal a {
          font-size: 12px;
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover { color: var(--accent); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .features-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-strip .feature-item:nth-child(2) { border-right: none; }
          .features-strip .feature-item:nth-child(3) { border-top: 1px solid var(--border-dim); }
          .features-strip .feature-item:nth-child(4) { border-top: 1px solid var(--border-dim); border-right: none; }
        }

        @media (max-width: 768px) {
          .newsletter-section { padding: 56px 20px; }
          .footer-main { padding: 48px 20px 36px; grid-template-columns: 1fr; gap: 28px; }
          .footer-bottom { padding: 20px; flex-direction: column; align-items: flex-start; gap: 12px; }
          .nl-form { flex-direction: column; border-radius: 4px; }
          .nl-input { border-right: 1px solid var(--border); border-radius: 4px; border-bottom: none; }
          .nl-btn { border-radius: 4px; text-align: center; }
          .footer-legal { flex-wrap: wrap; gap: 12px; }
        }

        @media (max-width: 600px) {
          .features-strip { grid-template-columns: 1fr; }
          .feature-item { border-right: none !important; border-top: 1px solid var(--border-dim); }
          .feature-item:first-child { border-top: none; }
        }
      `}</style>

      <div className="footer-wrapper">

        {/* ── Features Strip ── */}
        <div className="features-strip">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <div className="feature-text">
              <h4>Free Delivery</h4>
              <p>On all orders above Rs. 2,000</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div className="feature-text">
              <h4>Easy Returns</h4>
              <p>7-day hassle-free return policy</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div className="feature-text">
              <h4>Nationwide Shipping</h4>
              <p>Delivering across all of Pakistan</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.05 6.05l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="feature-text">
              <h4>24/7 Support</h4>
              <p>Always here to help you out</p>
            </div>
          </div>
        </div>

        {/* ── Newsletter Section ── */}
        <section className="newsletter-section">
          <p className="nl-eyebrow">✦ Stay in the loop ✦</p>
          <h2 className="nl-title">
            Get <span>Exclusive</span> Offers<br />Before Anyone Else
          </h2>
          <p className="nl-subtitle">
            Subscribe to our newsletter and unlock early access to sales, new arrivals, and style tips curated just for you.
          </p>

          {!subscribed ? (
            <>
              <form className="nl-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="nl-input"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="nl-btn">Subscribe</button>
              </form>
              <p className="nl-note">No spam. Unsubscribe anytime. 🔒 Your privacy is safe with us.</p>
            </>
          ) : (
            <div className="nl-success">
              <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              You're in! Welcome to the LuxeCart family ✦
            </div>
          )}
        </section>

        {/* ── Main Footer ── */}
        <footer>
          <div className="footer-main">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#" className="logo">Luxe<span>Cart</span></a>
              <p>
                Pakistan's premier destination for luxury fashion. We bring you curated collections that blend style, comfort, and elegance — all at your fingertips.
              </p>
              <div className="socials">
                {/* Instagram */}
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" className="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="social-btn" aria-label="Twitter">
                  <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                {/* TikTok */}
                <a href="#" className="social-btn" aria-label="TikTok">
                  <svg viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div className="footer-col" key={title}>
                <h5>{title}</h5>
                <ul>
                  {links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © 2025 <span>LuxeCart</span>. All rights reserved. Made with ♥ in Pakistan.
            </p>

            <div className="payment-methods">
              {paymentIcons.map((p) => (
                <span className="pay-badge" key={p}>{p}</span>
              ))}
            </div>

            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Footer;