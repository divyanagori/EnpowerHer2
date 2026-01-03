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
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
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
