import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ to = "/", children, ...props }) => {
    const navigate = useNavigate();

    return (
        <button
            className="cursor-pointer bg-[#ff7900] text-[#fff] text-base font-medium py-[15px] px-[30px] hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit"
            onClick={() => navigate(to)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
