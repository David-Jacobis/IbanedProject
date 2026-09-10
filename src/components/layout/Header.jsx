import "./Header.css";
import { useEffect, useRef, useState } from "react";
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

const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

const Header = () => {
  const [isMobile, setIsMobile] = useState(isMobileViewport);
  const [menuOpen, setMenuOpen] = useState(!isMobileViewport());
  const wasMobileRef = useRef(isMobileViewport());

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      // Only react when we actually cross the breakpoint, so an open mobile
      // drawer is not slammed shut by a rotation or a scrollbar resize event.
      if (wasMobileRef.current !== mobile) {
        wasMobileRef.current = mobile;
        setMenuOpen(!mobile);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile, menuOpen]);

  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const showMenu = !isMobile || menuOpen;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" aria-label="IBANED — página inicial">
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
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="menu-icon" />
          <span className="menu-icon" />
          <span className="menu-icon" />
        </button>

        <motion.nav
          id="primary-navigation"
          className={`menu ${menuOpen ? "active" : ""}`}
          initial={false}
          animate={showMenu ? "visible" : "hidden"}
          variants={isMobile ? menuVariants : undefined}
          aria-hidden={isMobile && !menuOpen}
        >
          {navigationLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  tabIndex={showMenu ? 0 : -1}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  tabIndex={showMenu ? 0 : -1}
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
