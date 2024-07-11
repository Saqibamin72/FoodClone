import { useSelector,useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, removeItem } from "./redux/cartSlice";
import { BiRestaurant } from "react-icons/bi";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handleCart=()=>{
        dispatch(clearCart())
    }
    const handleRemove=()=>{
        dispatch(removeItem())
    }

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="font-bold text-3xl bg-green-200 p-4 rounded-lg shadow-md mb-6">Cart - {cartItems.length}</h1>
            <button className="bg-green-100 "
            onClick={()=>handleCart()}>Clear cart</button>
            <button className="bg-green-100 "
            onClick={()=>handleRemove()}>remove-item</button>
            <div className=" flex w-full max-w-2xl">


                {cartItems.map((food) => (
                    <CartItem
                        key={food.id}
                        id={food.id}
                        name={food.name}
                        img={food.img}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                        className="mb-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default Cart;
