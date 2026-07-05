import "../styles/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search by hotel name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;