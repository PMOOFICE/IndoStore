import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from '../searchBar/SearchBox'
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { FaUserCheck } from 'react-icons/fa';
import { FaUserLarge } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
function Navbar() {
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }
    const cartItems = useSelector((state) => state.cart);
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
          
            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>
                <span className="flex items-center space-x-1">
                    <AiOutlineProduct className=' h-6 w-6 rounded-full'/>
                    <span>All Products
                    </span>
                </span></Link>
            </li>

            

            
            {!user ? <li>
                <Link to={'/login'}>
                <span className="flex items-center space-x-1">
                    <RiLoginCircleFill className=' h-6 w-6 rounded-full'/>
                    <span>Login
                    </span>
                </span>
                </Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user'}>
                <span className="flex items-center space-x-1">
                    <FaUserLarge className=' h-6 w-6 rounded-full'/>
                    <span>{user.name}
                    </span>
                </span>
                
                </Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>
                <span className="flex items-center space-x-1">
                    <RiAdminLine className=' h-6 w-6 rounded-full'/>
                    <span>{user.name}
                    </span>
                </span></Link>
            </li>}

            
            {/* logout */}
            {user? <li><Link onClick={(logout)}>
            <span className="flex items-center space-x-1">
                    <AiOutlineLogout className=' h-6 w-6 rounded-full'/>
                    <span>LogOut
                    </span>
                </span>
            
            </Link></li>:""}
            

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                <span className="flex items-center space-x-1">
                    <HiShoppingCart className=' h-6 w-6  rounded-full'/>
                    <span>Cart({cartItems.length})
                    </span>
                </span>
                </Link>
            </li>
        </ul>
    )
    
  return (
    <nav className="bg-pink-600 sticky top-0  z-10">
    {/* main  */}
    <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
            <Link to={'/'}>
                <h2 className=" font-bold text-white text-2xl text-center">IndoStore</h2>
            </Link>
        </div>
        <SearchBox />

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">
            {navList}
        </div>

        
        
    </div>
</nav>
  )
}

export default Navbar
