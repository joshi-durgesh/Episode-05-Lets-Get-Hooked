import { LOGO_URL } from "../utils/constant";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className='header'>
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
          <SearchBar />
          <button
            id='search-btn'
            className='nav-buttons'
            onClick={() => {
              const searchBar = document.getElementById("search-resto");
              const searchBtn = document.getElementById("search-btn");
              searchBar.classList.toggle("hidden");
              searchBar.focus();
              if (searchBtn.textContent === "Search") {
                searchBtn.innerHTML = "<span class='bi bi-x-lg'></span>Close";
              } else {
                searchBtn.innerHTML =
                  "<span class='bi bi-search'></span>Search";
              }
            }}
          >
            <span className='bi bi-search'></span>Search
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-percent'></span> Offers
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-patch-question'></span> Help
          </button>
          <button className='nav-buttons'>
            <span className='bi bi-person'></span> Sign In
          </button>
          <button className='nav-buttons cart'>
            <span className='bi bi-box2 '></span> Cart
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
