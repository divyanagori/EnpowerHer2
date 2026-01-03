// pages/CustomerDashboard.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { getData } from "../utils/localStorage";

const restaurantTypes = [
  "Rajasthani",
  "Gujarati",
  "Mughlai",
  "Jain",
  "Thai",
  "North Indian",
  "South Indian",
];

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState(getData());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Types");
  const [filterParking, setFilterParking] = useState("All Parking");

  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current) searchInput.current.focus();
  }, []);

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch =
      r.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "All Types" || r.type === filterType;

    const matchesParking =
      filterParking === "All Parking" ||
      (filterParking === "Yes" && r.parkinglot) ||
      (filterParking === "No" && !r.parkinglot);

    return matchesSearch && matchesType && matchesParking;
  });

  return (
    <div>
      <Navbar ref={searchInput}>
        <input
          type="text"
          placeholder="Search restaurant..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option>All Types</option>
          {restaurantTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select value={filterParking} onChange={(e) => setFilterParking(e.target.value)}>
          <option>All Parking</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Navbar>

      <div style={{ padding: "10px", marginTop: "20px" }}>
        {filteredRestaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {filteredRestaurants.map((r) => (
              <RestaurantCard key={r.restaurantID} {...r} isAdmin={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
