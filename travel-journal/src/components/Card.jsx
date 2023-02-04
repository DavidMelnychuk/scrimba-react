import "../App.css";
import markerIcon from "../assets/marker.svg";

export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="card">
      <img src={imageUrl} className="card__image"></img>
      <div className="card__info">
        <div className="card__info--title">
          <img src={markerIcon} className="card__info--marker" />
          <h6 className="card__info--location">{location}</h6>
          <a href={googleMapsUrl} className="card__info--link">
            View on Google Maps
          </a>
        </div>
        <h1>{title}</h1>
        <span className="card__info--date">
          {startDate} - {endDate}
        </span>
        <p className="card__info--description">{description}</p>
      </div>
    </div>
  );
}
