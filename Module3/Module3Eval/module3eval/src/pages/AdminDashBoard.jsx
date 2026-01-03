import { useState } from "react";
import { getData, saveData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [data, setData] = useState(getData());
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkinglot: "",
    image:
      "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  });

  const addRestaurant = () => {
    if (!form.restaurantName || !form.address || !form.type) {
      alert("All fields required");
      return;
    }

    const newData = [
      ...data,
      {
        ...form,
        restaurantID: Date.now(),
        parkinglot: form.parkinglot === "true",
      },
    ];

    saveData(newData);
    setData(newData);
    alert("Restaurant added");
  };

  return (
    <>
      <Navbar />
      <button onClick={addRestaurant}>Add Restaurant</button>

      {data.map(r => (
        <RestaurantCard key={r.restaurantID} {...r} />
      ))}
    </>
  );
};

export default AdminDashboard;
