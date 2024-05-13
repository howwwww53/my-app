import { useState } from "react"

function MySlider({label,onChange}){
    const[value,setValue]=useState(128);
    const handleSliderChange = (e)=>{
        setValue(e.target.value);
        if(onChange){
            onChange(e.target.value);
        }
    };
    return(
        <diV>
        <span>{label}</span>
        <input
        type="range"
        width="400"
        min="0"
        max="255"
        value={value}
        onChange={handleSliderChange}
        />
        <span>{value}</span>
        </diV>
    );
}
export default MySlider;