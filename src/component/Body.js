import FoodCard from "./FoodCard";
import FoodData from "../../constants";
import {  useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




  function filterData(searchText,allRestaurants){
    const filterData=allRestaurants.filter((restaurant)=>
        restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

   const Body=()=>{
    const[allRestaurants,setAllRestaurants]=useState([])
    
    const[filteredRestaurants,setFilteredRestaurants]=useState([])
   
    const[searchText,setSearchText]=useState('')
    useEffect(()=>{
        setAllRestaurants(FoodData);
    setFilteredRestaurants(FoodData)
   },[])
 
    
    return allRestaurants.length===0 ? ( <Shimmer/>) :(
        <>
        <div>
            <input type="text"
             data-testId="search-input"
             name="search"
             placeholder="Search Here"
             value={searchText}
             onChange={(e)=>{
                setSearchText(e.target.value);}
             }
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    setSearchText(e.target.value)
                    const data=filterData(searchText,allRestaurants)
                    setFilteredRestaurants(data)
                }
             }
            }
              
             
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
  
            
            <button onClick={()=>{
                const data=filterData(searchText,allRestaurants)
                setFilteredRestaurants(data)
            
                    
 }
       }
        
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">Search</button>
            
            
        </div>
      <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testId="resLists">
              {
                 filteredRestaurants.map((food) => (
                    <Link to={"/restaurant/" +food.id } key={food.id}  >  <FoodCard 
                          
                          id={food.id}
                          name={food.name}
                          img={food.img}
                          price={food.price}
                          desc={food.desc}
                          rating={food.rating}
                         
                        
                         
                          /> </Link>
                  ))
              }
          </div>
      </div>
      </>
  );
};


export default Body;