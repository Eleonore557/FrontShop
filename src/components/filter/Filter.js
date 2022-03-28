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
                    <button onClick={() => filterResult("Action")}>Action</button>
                    <button onClick={() => filterResult("Fantastique")}>Fantastique</button>
                    <button onClick={() => filterResult('Sport')}>Sport</button>
                </div>
            </div>
        </div>
        <div>
            {data.map((values) => {
                const {id, title} = values;
                return(
                    <>
                        <div key={id}>
                            <h5>{title}</h5>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}
