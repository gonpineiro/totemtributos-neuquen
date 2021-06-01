import './header.scss';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <div className="test">
        <div className="header-logo text-center" >
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;