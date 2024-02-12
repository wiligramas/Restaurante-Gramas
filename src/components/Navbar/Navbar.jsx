import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#Início">Início</a></li>
        <li className="p__opensans"><a href="#Sobre">Sobre</a></li>
        <li className="p__opensans"><a href="#Cardápio">Cardápio</a></li>
        <li className="p__opensans"><a href="#Prêmios">Prêmios</a></li>
        <li className="p__opensans"><a href="#Contato">Contato</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Cadastro</a>
        <div />
        <a href="/" className="p__opensans">Tabela de livros</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Início</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobre</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Cardápio</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Prêmios</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contato</a></li>
            </ul>
          </div>
        )} 
      </div>
    </nav>
  );
};

export default Navbar;
