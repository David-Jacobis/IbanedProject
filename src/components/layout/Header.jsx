import "./Header.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/IbanedIcon.png";
import { navigationLinks } from "../../data/siteContent";

const menuVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const MOBILE_BREAKPOINT = 768;

const Header = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const [menuOpen, setMenuOpen] = useState(
    typeof window !== "undefined" ? window.innerWidth > MOBILE_BREAKPOINT : true
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      setMenuOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <motion.img
            src={logo}
            id="logo"
            alt="Logo da IBANED"
            whileHover={{ scale: 0.92 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-icon" />
          <span className="menu-icon" />
          <span className="menu-icon" />
        </button>

        <motion.nav
          className={`menu ${menuOpen ? "active" : ""}`}
          initial={false}
          animate={!isMobile || menuOpen ? "visible" : "hidden"}
          variants={isMobile ? menuVariants : undefined}
        >
          {navigationLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {link.label}
                </NavLink>
              )}
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
