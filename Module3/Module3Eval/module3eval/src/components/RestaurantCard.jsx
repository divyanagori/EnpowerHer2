import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RestaurantCard = (props) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const deleteRestaurant = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    const updated = getData().filter(r => r.restaurantID !== props.restaurantID);
    saveData(updated);
    alert("Deleted successfully");
    window.location.reload();
  };

  return (
    <div>
      <img src={props.image} width="200" />
      <h3>{props.restaurantName}</h3>
      <p>{props.address}</p>
      <p>{props.type}</p>
      <p>Parking: {props.parkinglot ? "Yes" : "No"}</p>

      {user?.role === "admin" && (
        <>
          <button onClick={() => navigate(`/min/restaurants/update/${props.restaurantID}`)}>
            Update
          </button>
          <button onClick={deleteRestaurant}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;
