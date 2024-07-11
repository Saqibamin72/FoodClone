import { useState,useEffect } from "react";
import FoodData from "../../../constants";
const useRestaurant=(id)=>{
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const restaurant = FoodData.find(item => item.id === parseInt(id));
        setRestaurant(restaurant);
    }, [id]);
    return restaurant;
}
export default useRestaurant;