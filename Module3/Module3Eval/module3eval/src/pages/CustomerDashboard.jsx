import { getData } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
  return (
    <>
      <Navbar />
      {getData().map(r => (
        <RestaurantCard key={r.restaurantID} {...r} />
      ))}
    </>
  );
};

export default CustomerDashboard;
