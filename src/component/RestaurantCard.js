import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
    resData?.info;
  const { slaString } = sla;

  return (
    <a className='resto-card' href=''>
      <div className='resto-img-container'>
        <img className='resto-card-img' src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className='resto-detail-container'>
        <h3 className='resto-name overflow-text'>{name}</h3>
        <div className='resto-rating'>
          <span className='bi bi-star-fill star'></span>&nbsp;
          {avgRating} <span className='bi bi-dot dot'></span>
          &nbsp; {slaString}
        </div>
        <div className='overflow-text resto-cuisine'>{cuisines.join(",")}</div>
        <div className='resto-area'>{areaName}</div>
      </div>
    </a>
  );
};

export default RestaurantCard;
