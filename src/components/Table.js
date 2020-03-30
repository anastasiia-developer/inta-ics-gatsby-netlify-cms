import React from "react";
import styled from "styled-components";
import {ContentInFrontmatter} from "./Content"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const Wrapper = styled.div`
    border-radius: .5em;
    .gatsby-image-wrapper{ 
        min-width: 1em;
        margin-right: 1em;
    }
    .row{
        align-items: center;
    }
    tr th{
        color: #005BE4;
    }
    td, th {
      vertical-align: middle;
      text-align: left;
    }
    thead th{
      border-top: none; 
      font-size: .9em;
    }
    tbody tr:last-child td{
      border-bottom: none; 
    }
    tbody td{
       font-size: .85em;
       &:hover{
        background: #E8F2FF;
        cursor: pointer;
       }
    } 

    th:nth-child(2), th:nth-child(4){
      min-width: 20em;
    }
    .blue{
        color: #005BE4;
    }
    .green{
        color: #2EAF00;
        svg{ 
            position: relative;
            transform: rotate(-90deg);
            path{
                fill: #2EAF00;
            }
        }
    }
    .bold{
        font-weight: 700;
    }
    .medium{
        font-weight: 500;
    }
    .infinity{
        font-size: 1.5em;
        margin-left: .25em;
    }
@media screen and (min-width: 801px) {
    border: 1px solid #D2D6DD;
    background: #F9FCFF;
    margin: 3em auto;
    width: 75%;
    
    table{
        border-collapse: collapse;
    }
    td, th {
        padding: 1.8em 2em;
        border-top: 1px #CCC solid;
        border-bottom: 1px #CCC solid;
        border-left: 1px solid #D2D6DD; 
    }
    tbody .th{
        display: none;
    }
    th:first-child, td:first-child{
        border-left: none; 
        color: #717E90;
    }
  
}
@media screen and (max-width: 800px) {
    margin: 1em auto;
    width: 90%;
    thead {
        display: none;
    }
    tr {
      display: flex;
      flex-direction: column;
      background-color: #F9FBFF;
      margin-bottom: 1em;
      padding: 2em 1em;
      border: 1px solid #DDE5F0; 
      border-radius: .5em;
      font-size: .9em;
    }

    td {
        display: flex;
        width: 100%;
        padding-bottom: 1em;
        font-weight: 500;
    }
    .index{
        display: none;
    }
    
    tbody .th{
        min-width: 12em;
        max-width: 12em;
        font-size: .9em;
        color: #005BE4;
    }  
    .best-deal{
        padding-top: 0;
        overflow: hidden;
        &:before{
            content: 'Лучшее придложение';
            background: #6BC028;
            padding: .8em 0;
            width: calc(100% + 2em);
            margin-left: -1em;
            text-align: center;
            font-weight: 700;
            color: #fff;
            font-size: 1.2em;
            margin-bottom: 1.5em;
        }
    }
}
`;

const Table = ({table}) => {

    return (
        <Wrapper>
            <table className="preview">
                <thead>
                <tr>
                    <th> </th>
                    {table.head.map((title, index) =>
                        <th key={index}>
                            <div className="row">
                                <PreviewCompatibleImage imageInfo={title.image}/>
                                {title.name}
                            </div>
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                {table.body.map((item, index) =>
                    <tr key={index}>
                        <td className="index">
                            {index+1}
                        </td>
                        {item.column.map((val, indx) =>
                            <td className="name" key={indx}>
                                <div className="th">
                                    <div className="row">
                                        <PreviewCompatibleImage imageInfo={table.head[indx].image}/>
                                        {table.head[indx].name}
                                    </div>
                                </div>
                                <ContentInFrontmatter content={val.value}/>
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Table