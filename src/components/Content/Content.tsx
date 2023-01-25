import React, {useState} from "react";
import "./style.css";
import { DataBar } from "../DataBar/DataBar";
import { datas, dataType } from "../../data/datas";

interface ContentProps {
    category:string
}

export const Content = ({category}:ContentProps)=>{

    const displayDatas = datas(category);

    return(
        <div className="content-container">
            <div className="title-bar">TOP TERMS</div>
            
            {
                displayDatas.length==0?
                <span className="message">No Data</span>
                :
                <table>
                    <thead>
                        <tr>
                            <th>TERMS</th>
                            <th>% OF TOTAL POSTS</th>
                            <th># OF POSTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayDatas.map((data:dataType)=>
                                <tr key={data.id}>
                                    <td>
                                        <span className="text-name">{data.name}</span>
                                    </td>
                                    <td>
                                        <DataBar posts={data.posts}/>
                                    </td>
                                    <td>
                                        {data.posts}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}