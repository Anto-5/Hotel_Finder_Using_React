import "../styles/FilterBar.css";

function FilterBar({
  cities,
  selectedCity,
  setSelectedCity,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="filter-bar">
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">All Cities</option>

        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort By Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}

export default FilterBar;