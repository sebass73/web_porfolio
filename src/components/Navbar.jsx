import './Navbar.css';
import { pageList } from '../constants/pageList';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavItemClick= () => {
    setIsNavbarCollapsed(true);
  }

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed)
  }

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-colored' : 'navbar-transparent'} navbar-light`}>
      <div className={`container-fluid ${isScrolled ? 'd-flex' : 'd-none'}`}>
        <a className="navbar-brand" href="/">
          Sebas.Dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed? 'collapse' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {pageList.map((page, i) => (
              <li key={page + i} className="nav-item">
                <a  className="nav-link" aria-current="page" to={page.route} href={page.href} onClick={handleNavItemClick}>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Lang
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
