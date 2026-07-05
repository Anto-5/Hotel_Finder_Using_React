import { useEffect, useState } from "react";
import "../styles/Home.css";
import HotelCard from "../components/HotelCard";
import { getHotels } from "../services/api";
import SearchBar from "../components/SearchBar";
function Home() {
    const [search, setSearch] = useState("");
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
  const filteredHotels = hotels.filter((hotel) => {

  const keyword = search.toLowerCase();

  return (
    hotel.name.toLowerCase().includes(keyword) ||
    hotel.location.toLowerCase().includes(keyword)
  );

});

  return (
  <div className="home">

    <section className="hero">
      ...
    </section>

    <SearchBar
      search={search}
      setSearch={setSearch}
    />

    <section className="hotel-grid">

      {filteredHotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))}

    </section>

    {filteredHotels.length === 0 && (
      <h2 className="status">
        No hotels found.
      </h2>
    )}

  </div>
);
}

export default Home;