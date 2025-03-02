import React from "react";
import { useNavigate } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

const Button = ({ to = "/", bg = true, isWhatsApp = false, children, ...props }) => {
    const navigate = useNavigate();

    return (
        <button
            className={`cursor-pointer ${isWhatsApp
                ? "bg-[#02c100] text-[#fff] px-[30px] py-[15px] text-base rounded flex flex-row gap-2 items-center"
                : bg
                    ? "bg-[#ff7900] text-[#fff] px-[30px] py-[15px] text-base"
                    : "bg-transparent text-[#ff7900] px-0 text-sm"
                } font-medium hover:scale-95 scale-100 transition-transform duration-300 ease-in-out w-fit`}
            onClick={() => navigate(to)}
            {...props}
        >
            {isWhatsApp && <RiWhatsappFill fontSize={24} />} {children}
        </button>
    );
};

export default Button;
