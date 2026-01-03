// pages/AdminDashBoard.jsx
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { getData, saveData } from "../utils/localStorage";

const restaurantTypes = [
  "Rajasthani",
  "Gujarati",
  "Mughlai",
  "Jain",
  "Thai",
  "North Indian",
  "South Indian",
];

const AdminDashBoard = () => {
  const [restaurants, setRestaurants] = useState(getData());
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: restaurantTypes[0],
    parkinglot: "true",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Types");
  const [filterParking, setFilterParking] = useState("All Parking");

  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current) searchInput.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (!form.restaurantName || !form.address || !form.type) {
      alert("Please fill all required fields");
      return;
    }

    const newRestaurant = {
      ...form,
      restaurantID: Date.now(),
      parkinglot: form.parkinglot === "true",
    };

    const updatedData = [...restaurants, newRestaurant];
    saveData(updatedData);
    setRestaurants(updatedData);
    alert("Restaurant added successfully");

    setForm({
      restaurantName: "",
      address: "",
      type: restaurantTypes[0],
      parkinglot: "true",
      image:
        "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });
  };

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

      <div style={{ display: "flex", marginTop: "20px" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            padding: "15px",
            borderRight: "1px solid #ccc",
          }}
        >
          <h2>Add Restaurant</h2>
          <input
            type="text"
            name="restaurantName"
            placeholder="Restaurant Name"
            value={form.restaurantName}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            {restaurantTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <select
            name="parkinglot"
            value={form.parkinglot}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <button onClick={handleAdd} style={{ width: "100%" }}>
            Add Restaurant
          </button>
        </div>

        {/* Restaurant Cards */}
        <div style={{ flex: 1, padding: "10px" }}>
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
                <RestaurantCard key={r.restaurantID} {...r} isAdmin={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
