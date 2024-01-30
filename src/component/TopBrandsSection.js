import RestaurantCard from "./RestaurantCard";
import TopBrandsData from "../utils/top_brands.json";

const TopBrandsSection = () => {
  return (
    <section className='top-brand-section'>
      <div className='about-banner'>
        <h2>Top restaurant chains in Hyderabad</h2>
      </div>
      <div className='top-brand-container'>
        {TopBrandsData.map((brandData) => (
          <RestaurantCard key={brandData.info.id} resData={brandData} />
        ))}
      </div>
    </section>
  );
};

export default TopBrandsSection;
