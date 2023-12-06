import React from "react";
import { useNavigate } from "react-router";

const Bikecard = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl tranform  group hover:scale-110 duration-100 relative">
      <img
        src={require(`../assets/${products.image}.jpeg`)}
        alt={`${products.image}`}
        className="w-full h-52 object-cover"
      />
      <div className="flex flex-col items-center my-1 py-1 space-y-1  ">
        <span className="font-body  text-bg-success">{products.name}</span>
        <span className="font-body text-bg-success">{products.price}</span>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="font-body btn btn-primary text-xs border-danger"
        >
          Book Now
        </button>
        <button
          onClick={() => {
            navigate(`/bikedetail`);
          }}
          className="font-body btn btn-success text-xs group-hover:visible incvisible"
        >
          More Details{" "}
        </button>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">
        unlimited kms{" "}
      </span>
    </div>
  );
};

export default Bikecard;
