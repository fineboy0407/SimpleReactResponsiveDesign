import React, {useState, useEffect} from "react"
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { SecondHeader } from "../SecondHeader/SecondHeader";
import "./style.css";

export const Card = ()=>{

    const [category, setCategory] = useState("All");
    const [isHeaderShow, setIsHeaderShow] = useState(true);

    const onCategoryChanged = (newCategory:string)=>{
        setCategory(newCategory);
    }

    const onIsHeaderShowChanged = ()=>{
        setIsHeaderShow(!isHeaderShow);
    }

    return(
        <div className="card">
            <Header title="Card"/>
            <SecondHeader isHeaderShow={isHeaderShow} onCategoryChanged={onCategoryChanged} onIsHeaderShowChanged={onIsHeaderShowChanged} category={category}/>
            <Content category={category}/>
            <Footer/>
        </div>
    )
}