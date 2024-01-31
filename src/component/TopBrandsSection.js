import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import TopBrandsData from "../utils/TopBrandsData";

const TopBrandsSection = () => {
  const [TopBrands, SetTopBrands] = useState(TopBrandsData);
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
