import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getHotel } from "../services/api";

import "../styles/HotelDetails.css";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchHotel() {
      try {
        const data = await getHotel(id);
        setHotel(data);
      } finally {
        setLoading(false);
      }
    }

    fetchHotel();
  }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

  if (!hotel) {
    return <h2 className="status">Hotel not found.</h2>;
  }

  return (
    <div className="details-container">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      <img
        src={hotel.thumbnail}
        alt={hotel.name}
        className="details-image"
      />

      <h1>{hotel.name}</h1>

      <p className="details-location">
        📍 {hotel.location}
      </p>

      <h2 className="details-price">
        ₹ {Number(hotel.price).toLocaleString()}
      </h2>

      <p className="details-rating">
        ⭐ {hotel.rating}
      </p>

      <p className="details-description">
        {hotel.description}
      </p>
      <div className="gallery">

  <h2>Gallery</h2>

  <div className="gallery-grid">

    {hotel.photos.map((photo, index) => (

      <img
        key={index}
        src={photo}
        alt={`${hotel.name} ${index + 1}`}
      />

    ))}

  </div>

</div>
    </div>
  );
}

export default HotelDetails;