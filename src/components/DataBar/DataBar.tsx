import React from "react";
import "./style.css";

interface DataBarProps {
    posts:number
}

export const DataBar = ({posts}:DataBarProps)=>{
    
    const fillStyle = {
        width:`${posts}%`
    };
    
    return(
        <div className="container">
            <div className="filled-bar" style={fillStyle}>
            </div>
            <div className="posts-text">
                <span>
                    {posts} %
                </span>
            </div>
        </div>
    )
}