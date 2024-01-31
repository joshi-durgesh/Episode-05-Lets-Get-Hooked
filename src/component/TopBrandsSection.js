import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const TopBrandsSection = () => {
  const [TopBrands, SetTopBrands] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.487739974955158&lng=78.38145008147583&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    SetTopBrands(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <section className='top-brand-section'>
      <div className='about-banner'>
        <h2>Top restaurant chains in Hyderabad</h2>
        <button
          className='top-resto-btn'
          onClick={() => {
            const filterdData = TopBrands.filter((data) => {
              return data.info.avgRating > 4;
            });
            SetTopBrands(filterdData);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className='top-brand-container'>
        {TopBrands.map((brandData) => (
          <RestaurantCard key={brandData.info.id} resData={brandData} />
        ))}
      </div>
    </section>
  );
};

export default TopBrandsSection;
