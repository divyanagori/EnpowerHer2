// components/RestaurantCard.jsx
import React from "react";

const RestaurantCard = ({ restaurantID, restaurantName, address, type, parkinglot, image }) => {
  // Admin actions
  const handleUpdate = () => {
    window.location.href = `/min/restaurants/update/${restaurantID}`;
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const data = JSON.parse(localStorage.getItem("evalData")) || [];
      const newData = data.filter((r) => r.restaurantID !== restaurantID);
      localStorage.setItem("evalData", JSON.stringify(newData));
      alert("Restaurant deleted successfully");
      window.location.reload();
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <img src={image} alt={restaurantName} style={{ width: "100%", borderRadius: "5px" }} />
      <h3>{restaurantName}</h3>
      <p>{address}</p>
      <p>Type: {type}</p>
      <p>Parking: {parkinglot ? "Yes" : "No"}</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
