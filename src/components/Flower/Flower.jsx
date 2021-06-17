import React from 'react';
import './Flower.css'
import {useDispatch} from "react-redux";

export function Flower({ id, name, price, checked }) {
  const dispatch = useDispatch();

  const changeStatus = (id) => {
    dispatch({type:"CHANGE_STATUS", payload: id})
  }

  return (
    <div className="flowerCard">
      <span
        className={
          checked
            ? "flowerChecked flowerName"
            : "flowerToCheck flowerName"
        }
      >
        {name}
      </span>
      <span
        className={
          checked
            ? "flowerChecked flowerPrice"
            : "flowerToCheck flowerPrice"
        }
      >
        {`$${price}`}
      </span>
      {!checked && <button onClick={() => changeStatus(id)} className="checkFlowerBtn">Check</button>}
    </div>
  )
}
