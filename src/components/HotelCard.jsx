import "../styles/HotelCard.css";
import { useNavigate } from "react-router-dom";
function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div className="hotel-card">

      <div className="hotel-image">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
        />

        <span className="rating-badge">
          ⭐ {hotel.rating}
        </span>

      </div>

      <div className="hotel-content">

        <h2>{hotel.name}</h2>

        <p className="location">
          📍 {hotel.location}
        </p>

        <h3>
          ₹ {Number(hotel.price).toLocaleString()}
        </h3>

        <button
  onClick={() => navigate(`/hotel/${hotel.id}`)}
>
  View Details
</button>

      </div>

    </div>
  );
}

export default HotelCard;