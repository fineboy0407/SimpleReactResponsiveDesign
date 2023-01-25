import React, {FunctionComponent} from "react"
import "./style.css"

interface HeaderProps {
    title: string
}
export const Header = ({title}:HeaderProps)=>{
    return(
        <div className="header-container">
            <div className="header">
                <div className="header-title">{title}</div>
                <div className="header-help"><span>?</span></div>
            </div>
        </div>
    )
}