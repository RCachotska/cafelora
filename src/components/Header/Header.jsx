

export const Header = () => {
    return (

        <header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">Domů</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Galerie</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>

      </div>
    </header>

    );
};
