// import { useState } from 'react';
// import './Header.css';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="site-header">
//       <div className="header-top">
//         <a className="brand" href="/">
//           ShopEasy
//         </a>

//         <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
//           <a href="#home" onClick={closeMenu}>
//             Home
//           </a>
//           <a href="#shop" onClick={closeMenu}>
//             Shop
//           </a>
//           <a href="#collections" onClick={closeMenu}>
//             Collections
//           </a>
//           <a href="#about" onClick={closeMenu}>
//             About
//           </a>
//           <a href="#contact" onClick={closeMenu}>
//             Contact
//           </a>
//           <a className="nav-cta" href="#shop" onClick={closeMenu}>
//             Shop Now
//           </a>
//         </nav>

//         <div className="header-right">
//           <a className="text-link" href="#signin">
//             Sign In
//           </a>
//           <button
//             className={`menu-toggle ${menuOpen ? 'open' : ''}`}
//             aria-label="Toggle navigation"
//             aria-expanded={menuOpen}
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>
//       </div>

//       <div className="hero-content">
//         <p className="eyebrow">Online Shopping Store</p>
//         <h1>Sell fast, look premium, and delight every customer.</h1>
//         <p>
//           A clean responsive header with a working desktop menu and mobile toggle.
//           It gives your store a polished navigation experience on every device.
//         </p>
//         <div className="hero-actions">
//           <a className="btn primary" href="#shop">
//             Shop now
//           </a>
//           <a className="btn secondary" href="#about">
//             Learn more
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Men", href: "#" },
    { label: "Women", href: "#" },
    { label: "Kids", href: "#" },
    { label: "Sale 🔥", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #141414;
          --accent: #c9a96e;
          --accent-light: #e8c98a;
          --text: #f0ede8;
          --muted: #888;
          --border: rgba(201,169,110,0.2);
          --radius: 4px;
        }

        .header-wrapper {
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.3s ease;
        }

        .header-wrapper.scrolled {
          box-shadow: 0 4px 40px rgba(201,169,110,0.08);
        }

        /* TOP BAR */
        .top-bar {
          background: var(--accent);
          color: #0a0a0a;
          text-align: center;
          padding: 7px 16px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* MAIN NAV */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 70px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* LOGO */
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 1px;
          flex-shrink: 0;
        }

        .logo span {
          color: var(--accent);
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          position: relative;
          transition: color 0.25s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--accent-light);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* ICONS */
        .nav-icons {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: var(--radius);
          transition: color 0.2s, background 0.2s;
          position: relative;
        }

        .icon-btn:hover {
          color: var(--accent);
          background: rgba(201,169,110,0.08);
        }

        .icon-btn svg {
          width: 20px;
          height: 20px;
          stroke-width: 1.5;
        }

        .cart-badge {
          position: absolute;
          top: 0px;
          right: 0px;
          background: var(--accent);
          color: #0a0a0a;
          border-radius: 50%;
          width: 17px;
          height: 17px;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SEARCH BAR */
        .search-bar {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.35s ease;
          background: var(--surface);
          border-top: 1px solid var(--border);
        }

        .search-bar.open {
          max-height: 80px;
        }

        .search-inner {
          display: flex;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 14px 20px;
          gap: 12px;
        }

        .search-inner input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          caret-color: var(--accent);
        }

        .search-inner input::placeholder {
          color: var(--muted);
        }

        .search-submit {
          background: var(--accent);
          color: #0a0a0a;
          border: none;
          padding: 7px 20px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: background 0.2s;
        }

        .search-submit:hover {
          background: var(--accent-light);
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* MOBILE MENU */
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--surface);
          border-top: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease;
        }

        .mobile-menu.open {
          max-height: 500px;
        }

        .mobile-menu a {
          color: var(--muted);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 16px 40px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
        }

        .mobile-menu a:hover {
          color: var(--accent-light);
          background: rgba(201,169,110,0.05);
          padding-left: 50px;
        }

        .mobile-actions {
          display: flex;
          gap: 12px;
          padding: 20px 40px;
        }

        .mobile-actions button {
          flex: 1;
          padding: 11px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
        }

        .btn-outline {
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          transition: border-color 0.2s, color 0.2s;
        }

        .btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .btn-filled {
          background: var(--accent);
          border: none;
          color: #0a0a0a;
          transition: background 0.2s;
        }

        .btn-filled:hover {
          background: var(--accent-light);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-menu {
            display: flex;
          }

          .nav-icons .icon-btn:not(.cart-icon):not(.search-icon) {
            display: none;
          }

          .mobile-actions {
            padding: 20px;
          }

          .mobile-menu a {
            padding: 14px 20px;
          }

          .mobile-menu a:hover {
            padding-left: 28px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 21px;
          }

          .top-bar {
            font-size: 10.5px;
          }
        }
      `}</style>

      <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
        {/* Announcement Bar */}
        <div className="top-bar">
          ✦ Free Shipping on orders above Rs. 2000 &nbsp;|&nbsp; Use Code: SAVE10 for 10% off ✦
        </div>

        {/* Main Navbar */}
        <nav className="navbar">
          {/* Logo */}
          <a href="#" className="logo">
            Luxe<span>Cart</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="nav-icons">
            {/* Search */}
            <button
              className="icon-btn search-icon"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Wishlist */}
            <button className="icon-btn" aria-label="Wishlist">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* User */}
            <button className="icon-btn" aria-label="Account">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {/* Cart */}
            <button className="icon-btn cart-icon" aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        <div className={`search-bar ${searchOpen ? "open" : ""}`}>
          <div className="search-inner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search for products, brands..." autoFocus={searchOpen} />
            <button className="search-submit">Search</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-actions">
            <button className="btn-outline">Login</button>
            <button className="btn-filled">Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
