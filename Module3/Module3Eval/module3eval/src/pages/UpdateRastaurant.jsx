import { useParams, useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/localStorage";
import { useState } from "react";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = getData().find(r => r.restaurantID == id);
  const [form, setForm] = useState(restaurant);

  const update = () => {
    if (!window.confirm("Are you sure you want to update?")) return;

    const updated = getData().map(r =>
      r.restaurantID == id ? form : r
    );

    saveData(updated);
    alert("Updated successfully");
    navigate("/admin/dashboard");
  };

  return (
    <>
      <input value={form.restaurantName} />
      <button onClick={update}>Update</button>
    </>
  );
};

export default UpdateRestaurant;
