import React, { useContext } from 'react';
import { AiFillStar } from "react-icons/ai";
import UserContext from './utils/UserContext';

const FoodCard = ({ img, name, price, desc, rating }) => {
    const {user}=useContext(UserContext);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-48 object-cover" src={img} alt={name} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <span className="text-gray-900 text-xl font-semibold">{price}</span>
                <p className="text-gray-700 text-base mt-2">{desc?.slice(0, 50)}...</p>
                <p className="text-yellow-500 text-base mt-2"><AiFillStar />{rating}</p>
                <span className='text-yellow-500 text-base mt-2'>{user.name}-{user.email}</span>
               
               
            </div>
        </div>
    );
};

export default FoodCard;
