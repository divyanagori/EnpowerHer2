import { useRef, useEffect } from "react";

const Navbar = ({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  parkingFilter,
  setParkingFilter,
}) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="navbar">
      <input
        ref={searchRef}
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>

      <select
        value={parkingFilter}
        onChange={(e) => setParkingFilter(e.target.value)}
      >
        <option value="">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
    </div>
  );
};

export default Navbar;
