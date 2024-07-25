// import { useParams } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";
// import FoodData from "../../constants"; // Assuming this is your data source

// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//     const { id } = useParams();

//     // Find the restaurant object that matches the id
//     // const restaurant = FoodData.filter(item => item.id === parseInt(id))[0];
//      const restaurant = FoodData.find(item => item.id === parseInt(id));

//     // if (!restaurant) {
//     //     return <h1>Restaurant not found</h1>;
//     // }

//     const { img, name, price, desc, rating } = restaurant;

//     return (!restaurant)?<shimmer/>:(
//         <div>
//             <h1>Restaurant Id: {id}</h1>
//             <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
//                 <img className="w-full h-48 object-cover" src={img} alt={name} />
//                 <div className="px-6 py-4">
//                     <h2 className="font-bold text-xl mb-2">{name}</h2>
//                     <span className="text-gray-900 text-xl font-semibold">{price}</span>
//                     <p className="text-gray-700 text-base mt-2">{desc?.slice(0, 50)}...</p>
//                     <p className="text-yellow-500 text-base mt-2"><AiFillStar />{rating}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RestaurantMenu;
// import { useParams } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";
// import FoodData from "../../constants"; // Assuming this is your data source

// const RestaurantMenu = () => {
//     const { id } = useParams();

//     // Find the restaurant object that matches the id
//     const restaurant = FoodData.find(item => item.id === parseInt(id));

//     if (!restaurant) {
//         return <h1 className="text-center text-2xl mt-8">Restaurant not found</h1>;
//     }

//     const { img, name, price, desc, rating } = restaurant;

//     return (
//         <div className="flex flex-col items-center mt-8">
//             <h1 className="text-3xl font-bold mb-6">Restaurant Id: {id}</h1>
//             <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
//                 <img className="w-full h-48 object-cover" src={img} alt={name} />
//                 <div className="p-6">
//                     <h2 className="font-bold text-2xl mb-2">{name}</h2>
//                     <span className="text-gray-900 text-xl font-semibold">{price}</span>
//                     <p className="text-gray-700 text-base mt-2">{desc?.slice(0, 50)}...</p>
//                     <div className="flex items-center mt-2 text-yellow-500 text-base">
//                         <AiFillStar className="mr-1" />
//                         {rating}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import { useParams } from "react-router-dom";


import { AiFillStar } from "react-icons/ai";
import useRestaurant from "./utils/useRestaurant";
import { useDispatch, } from "react-redux";
import { addItem } from "./redux/cartSlice";



const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant=useRestaurant(id);

    if (!restaurant) {
        return <h1>Restaurant not found</h1>;
    }

    const { img, price, name, desc, rating } = restaurant;
    
  const dispatch=useDispatch();
  const handleItem=()=>{
        dispatch(addItem(restaurant))   

       }   
   

    return (
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-3xl font-bold mb-6">Restaurant Id: {id}</h1>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-48 object-cover" src={img} alt={name} />
            <div className="p-6">
              <h2 className="font-bold text-2xl mb-2">{name}</h2>
              <span className="text-gray-900 text-xl font-semibold">{price}</span>
              <p className="text-gray-700 text-base mt-2">{desc?.slice(0, 50)}...</p>
              <div className="flex items-center mt-2 text-yellow-500 text-base">
                <AiFillStar className="mr-1" />
                {rating}
              </div>
              <button   data-testId="addMenu-btn" className= "mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300" onClick={()=>handleItem()}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      
    );
};

export default RestaurantMenu;
