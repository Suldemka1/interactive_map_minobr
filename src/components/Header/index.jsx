import { setIsOpen } from "../../store/slices/mobileMenuSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'

const Header = ({ children }) => {
  const mobile = useSelector((state) => state.mobile);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="header">
          <span className="header__website-name">
            <span className="header__icon">
              <img src="/ioko_logo.png" />
            </span>

            <span className="header__title">
              <h3>Образовательная карта Республики Тыва</h3>
            </span>
          </span>

          {!mobile.isOpen ? (
            <GiHamburgerMenu
              onClick={() => dispatch(setIsOpen())}
              className="header__filter__open-close"
              size={40}
            />
          ) : (
            <CgClose
              onClick={() => dispatch(setIsOpen())}
              className="header__filter__open-close"
              size={40}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
