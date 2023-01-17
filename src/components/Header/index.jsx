import { Link } from "react-router-dom";
import { setIsOpen } from "../../store/slices/mobileMenuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ children }) => {
  const mobile = useSelector((state) => state.mobile);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="header">
          <>
            <div className="header__icon">
              <img src="/ioko_logo.png" />
            </div>

            <div className="header__title">
              <h3>Образовательная карта Республики Тыва</h3>
            </div>
          </>

          {/* <div className="header__menu">
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
          </div> */}
        </div>
        {
          <GiHamburgerMenu
            onClick={() => dispatch(setIsOpen())}
            style={{
              zIndex: 700,
              cursor: "pointer",
            }}
            size={40}
          />
        }
      </div>
    </header>
  );
};

export default Header;
