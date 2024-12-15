'use client';
import React, { useState } from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Ferme le menu après la navigation
    }
  };

  return (
    <>
      {/* Icône du menu */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="Menu Icon"
          className={styles.icon}
        />
      </div>

      {/* Navigation */}
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li onClick={() => handleScroll('header')}>Home</li>
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
