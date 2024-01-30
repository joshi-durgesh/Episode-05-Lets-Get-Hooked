import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <header className='header'>
      <div className='site-logo'>
        <a href=''>
          <img src={LOGO_URL} className='logo' />
        </a>
        <a href='' className='location'>
          <span className='city'>Hyderabad</span> MLA Colony, Banjara Hills,
          Hyderabad <span className='bi bi-chevron-down loc-arrow'></span>
        </a>
      </div>
      <nav className='navbar'>
        <a href='' className='nav-links'>
          <span className='bi bi-search'></span> Search
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-percent'></span> Offers
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-patch-question'></span> Help
        </a>
        <a href='' className='nav-links'>
          <span className='bi bi-person'></span> Sign In
        </a>
        <a href='' className='nav-links cart'>
          <span className='bi bi-box2 '></span> Cart
        </a>
      </nav>
    </header>
  );
};

export default Header;
