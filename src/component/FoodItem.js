
import { AiFillStar } from "react-icons/ai";
const FoodItem=({ img, price, name, desc, rating})=>{
    return(

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
              </div>
              </div>
    )
}
export default FoodItem;