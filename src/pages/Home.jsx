import { useEffect, useState } from "react";
import "../styles/Home.css";

import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import { getHotels } from "../services/api";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  const cities = [...new Set(hotels.map((hotel) => hotel.location))];

  const filteredHotels = hotels
    .filter((hotel) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        hotel.name.toLowerCase().includes(keyword) ||
        hotel.location.toLowerCase().includes(keyword);

      const matchesCity =
        selectedCity === "" || hotel.location === selectedCity;

      return matchesSearch && matchesCity;
    })
    .sort((a, b) => {
      if (sortOrder === "low") {
        return Number(a.price) - Number(b.price);
      }

      if (sortOrder === "high") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });

  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Perfect Hotel</h1>

        <p>
          Discover comfortable stays across India with the best prices,
          ratings and locations.
        </p>
      </section>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
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