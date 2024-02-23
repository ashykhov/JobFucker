import React from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { ThemeConsumer } from '@context/ThemeContext';
/**
 * Header component with theme switcher.
 * @returns {React.FC} React FC without any props.
 */
const Header: React.FC = () => {
  return (
    <header className="light-bb">
      Header
    </header>
  );
};

export default Header;
