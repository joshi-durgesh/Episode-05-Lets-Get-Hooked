import BannerItem from "./BannerItem";
import SlidingContentBtn from "./SlidingContentBtn";
import BannerData from "../utils/banner.json";

const BannerSection = () => {
  return (
    <section className='banner-section'>
      <div className='about-banner'>
        <h2>What's on your mind?</h2>
        <div className='btn-banner'>
          <SlidingContentBtn side='left' />
          <SlidingContentBtn side='right' />
        </div>
      </div>
      <div className='banner-products'>
        {BannerData.map((data) => (
          <BannerItem key={data.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
