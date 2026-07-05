import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🏨 Hotel Finder</div>

      <ul>
        <li>Home</li>
        <li>Hotels</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;