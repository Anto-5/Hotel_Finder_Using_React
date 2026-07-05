import { useEffect, useState } from "react";
import "../styles/Home.css";
import HotelCard from "../components/HotelCard";
import { getHotels } from "../services/api";

function Home() {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function fetchHotels() {

      try {

        const data = await getHotels();
        setHotels(data);

      } catch {

        setError("Unable to load hotels.");

      } finally {

        setLoading(false);

      }

    }

    fetchHotels();

  }, []);

  if (loading) {
    return <h2 className="status">Loading hotels...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <div className="home">

      <section className="hero">

        <h1>Find Your Perfect Hotel</h1>

        <p>
          Discover comfortable stays across India with the best prices.
        </p>

      </section>

      <section className="hotel-grid">

        {hotels.map((hotel) => (

          <HotelCard
        key={hotel.id}
        hotel={hotel}
    />

        ))}

      </section>

    </div>
  );
}

export default Home;