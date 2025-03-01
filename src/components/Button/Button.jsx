import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ to = "/", bg = true, children, ...props }) => {
    const navigate = useNavigate();

    return (
        <button
            className={`cursor-pointer ${bg === true ? "bg-[#ff7900] text-[#fff] px-[30px] py-[15px]" : "bg-transparent text-[#ff7900] px-0"} text-base font-medium  hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit`}
            onClick={() => navigate(to)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
