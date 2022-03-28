import React, { useState } from 'react'
import styles from "./Filter.module.scss";
import Categories from './Categories';



export default function Filter() {
    const [data, setData]= useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
  return (
    <>
        <h1>Filtre</h1>
        <div>
            <div>
                <div>
                    <button onClick={() => filterResult("Mens black Shirt")}>Men</button>
                    <button onClick={() => filterResult("Women")}>Women</button>
                    <button onClick={() => filterResult('Children')}>Children</button>
                    <button onClick={() => filterResult('Black')}>Black</button>
                    <button onClick={() => filterResult('White')}>White</button>
                    <button onClick={() => setData(Categories)}>All</button>
                </div>
            </div>
        </div>
        <div>
            {data.map((values) => {
                const {id, title, price} = values;
                return(
                    <>
                        <div key={id}>
                            <h5>{title}</h5>
                            <p>{price}</p>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}
