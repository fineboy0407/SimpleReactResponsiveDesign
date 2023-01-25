import React, {FunctionComponent, useState} from "react";
import "./style.css";

interface SecondHeaderProps {
    isHeaderShow:boolean
    category:string
    onCategoryChanged(category:string):void
    onIsHeaderShowChanged():void
}

export const SecondHeader = ({category, isHeaderShow, onCategoryChanged, onIsHeaderShowChanged}:SecondHeaderProps)=>{

    const [categories, setCategories] = useState<string[]>(()=>{
        return ["All", "T", "X", "C", "F"];
    });

    function getNavItemClassName (text:string):string {
        return `nav-item ${text==category?"nav-item-selected":""}`;
    }

    const display=isHeaderShow?"flex":"none";

    return(
        <div className="second-header" style={{display}}>
            <div className="nav-bar">
                {
                    categories.map((c:string, index:number)=>
                         <div key={index} className={getNavItemClassName(c)} onClick={()=>onCategoryChanged(c)}><span>{c}</span></div>
                    )
                }
            </div>
            <div className="splitter"></div>
            <div className="hide-button" onClick={()=>onIsHeaderShowChanged()}><span>HIDE</span></div>
        </div>
    )
}