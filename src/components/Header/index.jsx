import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__title">
            Образовательная карта Республики Тыва
          </div>
          <div className="header__menu">
            <ul className="header__menu-list">
              <Link to="/" className="header__menu-list-item">
                Страница №1
              </Link>
              <Link to="/" className="header__menu-list-item">
                Страница №2
              </Link>
              <Link to="/" className="header__menu-list-item">
                Страница №3
              </Link>
              <Link to="/" className="header__menu-list-item">
                Страница №4
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
