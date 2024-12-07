import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { StoreData } from "../Store/StoreContext";
import { CiBookmark, CiMail } from "react-icons/ci";

const ProductPage = () => {
  const { data } = useContext(StoreData);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isWishlist, setIsWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = data.find((pro) => pro.id === parseInt(id));
  const suggestedProducts = data.filter((pro) => pro.id !== parseInt(id));

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const addToCart = () => {
    alert(`${product.name} (x${quantity}) has been added to your cart!`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-1 p-4 bg-gray-100">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-blue-400">{product.name}</p>
      </div>

      {/* Product Content */}
      <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:justify-start justify-between w-full">
        {/* Product Image */}
        <div className="flex-1 max-w-sm">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex items-start justify-center flex-col ">
          <div className="text-gray-400 mb-4 flex items-center gap-1">
            <CiBookmark />
            {product.category}
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-lg font-medium text-gray-600 mb-2 flex items-center gap-1">
            <CiMail />
            Sold By:{" "}
            <span className="text-blue-500">
              {product.sold_by || "Unknown Seller"}
            </span>
          </div>
          <div className="flex gap-2 ">
            {product.tags.map((tag,index) => (
              <span key={index} className="text-gray-500 text-sm bg-blue-100 p-1 my-4">{tag}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="text-2xl font-bold text-blue-500 mb-6">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-2xl font-bold text-red-500 mb-6 line-through">
              ₹{product.original_price.toFixed(2)}
            </p>
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-4"></div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <p className="font-medium w-4 flex items-center justify-center">
              {quantity}
            </p>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-col md:flex-row w-full">
            <button
              onClick={addToCart}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 w-full justify-center "
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`flex items-center gap-2 px-6 py-2 border rounded-md ${
                isWishlist ? "border-red-500 text-red-500" : "border-gray-300"
              } hover:bg-gray-100 transition-all duration-300 w-full justify-center`}
            >
              <FaHeart />
              {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* About Product */}
      <div className="p-6 bg-gray-100 mt-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">About this Product</h2>
        <p className="text-gray-600">
          {product.about ||
            "Detailed information about the product goes here. This section can include specifications, features, and other details."}
        </p>
      </div>

      {/* Suggested Products */}
      <div className="p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestedProducts.map((suggested) => (
            <div
              key={suggested.id}
              className="border rounded-md p-4 flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigate(`/product/${suggested.id}`)}
            >
              <img
                src={suggested.img}
                alt={suggested.name}
                className="w-32 h-32 object-cover mb-4 rounded-md"
              />
              <h3 className="font-medium text-gray-800">{suggested.name}</h3>
              <p className="text-blue-500 font-bold">
                ${suggested.price.toFixed(2)}
              </p>
              <button
                onClick={() => navigate(`/product/${suggested.id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
