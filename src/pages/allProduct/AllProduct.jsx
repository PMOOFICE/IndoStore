import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";

const AllProduct = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000); // Adjust the max value as per your need
    const [brand, setBrand] = useState('');
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Add to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Filter products based on price range
    const filteredProducts = getAllProduct.filter((item) =>
        
        (item.price >= minPrice && item.price <= maxPrice) 
    
    );
  

    return (
        <Layout>
            <div className="py-8 px-6 bg-gray-400">
                <div className="container mx-auto">
                    {/* Flex container to divide the screen */}
                    <div className="flex">
                        {/* Filter Section (1/4) */}
                        <div className="w-full lg:w-1/5 md:w-1/4 sm:w-1/3 p-4  shadow-md rounded-lg">
                            <h2 className="text-lg font-medium mb-4">Filter by Price</h2>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="minPrice" className="text-sm text-gray-600">
                                    Min: ₹{minPrice}
                                </label>
                                <input
                                    type="range"
                                    id="minPrice"
                                    min="0"
                                    max="5000" // Adjust this value as per your need
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="maxPrice" className="text-sm text-gray-600">
                                    Max: ₹{maxPrice}
                                </label>
                                <input
                                    type="range"
                                    id="maxPrice"
                                    min="0"
                                    max="5000" // Adjust this value as per your need
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="mt-2"
                                />
                            </div>
                            
                        </div>

                        {/* Main Content Section (3/4) */}
                        <div className="w-full lg:w-4/5 md:w-3/4 sm:2/3 p-4">
                            <div className="text-center mb-5">
                                <h1 className="text-2xl font-semibold">All Products</h1>
                            </div>

                            <section className="text-gray-600 body-font">
                                <div className="container px-5 lg:px-0 py-5 mx-auto">
                                    <div className="flex justify-center">
                                        {loading && <Loader />}
                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        {filteredProducts.map((item, index) => {
                                            const { id, title, price, productImageUrl } = item;
                                            return (
                                                <div key={index} className="p-4 w-full md:w-1/4">
                                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                                        <img
                                                            onClick={() => navigate(`/productinfo/${id}`)}
                                                            className="lg:h-80 h-96 w-full p-2"
                                                            src={productImageUrl}
                                                            alt="blog"
                                                        />
                                                        <div className="p-6">
                                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                                IndoStore
                                                            </h2>
                                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                                {title.substring(0, 25)}
                                                            </h1>
                                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                                ₹{price}
                                                            </h1>

                                                            <div className="flex justify-center">
                                                                {cartItems.some((p) => p.id === item.id) ? (
                                                                    <button
                                                                        onClick={() => deleteCart(item)}
                                                                        className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                                    >
                                                                        Delete From Cart
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => addCart(item)}
                                                                        className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                                    >
                                                                        Add To Cart
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllProduct;
