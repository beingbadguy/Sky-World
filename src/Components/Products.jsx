import React, { useContext } from "react";
import { StoreData } from "../Store/StoreContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data } = useContext(StoreData);
  const navigate = useNavigate();

  return (
    <div className="m-4 py-1">
      <h1 className="p-2 md:p-4 bg-white   my-6 flex items-center justify-between rounded">
        <p className="text-lg sm:text-xl  md:text-2xl ">
          Today's Popular Product
        </p>
        {/* <p className="underline cursor-pointer">See all categories</p> */}
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-10">
        {data.map((category) => (
          <div
            key={category.id}
            className={` relative rounded-lg overflow-hidden ${category.bgColor} transition-all duration-500 ease-in-out cursor-pointer  flex items-center justify-center flex-col gap-4 bg-white p-6 hover:scale-90 `}
            onClick={() => {
              navigate(`/product/${category.id}`);
            }}
          >
            <p className="uppercase absolute top-1 left-2 font-bold text-blue-500 text-sm">
              {category.tags[0]}
            </p>
            <img
              src={category.img}
              alt={category.name}
              className="object-cover w-48 h-48 rounded "
            />
            <div className=" text-center flex items-start justify-start text-lg font-bold text-black ">
              {category.name}
            </div>
            <div className="flex gap-2 items-center">
              <div className=" text-center flex items-center justify-center text-sm font-bold text-black ">
                ₹{category.price}
              </div>
              <div className=" text-center flex items-center justify-center text-sm font-bold text-red-500 line-through ">
                ₹{category.original_price}
              </div>
            </div>
            <div className="bg-blue-500 w-full flex items-center justify-center p-2 text-white font-bold rounded hover:bg-black transition-all duration-500">
              Buy Now
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
