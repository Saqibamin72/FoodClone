import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnline from "./utils/useOnline"
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";






const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const { user } = useContext(UserContext);

   
    const cartItems=useSelector(store=>store.cart.items );

    return (
        <div className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Title />
                </div>
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li className="hover:text-red-500 transition-colors"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-500 transition-colors"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-red-500 transition-colors"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-red-500 transition-colors"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li className="hover:text-red-500 transition-colors"><Link to="/instamart">Instamart</Link></li>
                 
                </ul>
                <h1>{isOnline ? "🟢" : "🔴"}</h1>
                <span className="bg-inherit text-red-500">{user.name}-{user.email}</span>

                {isLoggedIn ?
                    (<button onClick={() => setIsLoggedIn(false)}>Logout</button>)
                    :
                    (<button onClick={() => setIsLoggedIn(true)}>Login</button>)
                }

            </div>
        </div>
    );
};

const Title = () => {
    return (
        <a href="/" className="flex items-center space-x-2">
            <img src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-xl font-bold">Food App</span>
        </a>
    );
};

export default Header;
