import React from "react";

type IconProps = {
    name:string;
}

const Icon = (props:IconProps) => {
    require("icons/"+props.name+".svg")
    return (
        <svg>
            <use xlinkHref={"#"+props.name}></use>
        </svg>
    )
} 

export default Icon;