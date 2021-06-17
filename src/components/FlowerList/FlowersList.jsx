import React, {useEffect} from 'react';
import {Flower} from "../Flower/Flower";
import './FlowersList.css';
import {useSelector} from "react-redux";

export function FlowersList() {
  const flowers = useSelector(state => state.flowers)

  useEffect(() => {
    document.title = 'List';
  },[])

  return (
    <div className="flowersListWrapper">
      <span className="flowersListTitle">Added flowers:</span>
      <ul className="flowersList">
        {flowers.map(flower => (
          <li
            className={
              !flower.checked
                ? "flowersCheckedElement flowersElement"
                : "flowersUncheckedElement flowersElement"
            }
            key={flower.id}
          >
            <Flower {...flower} />
          </li>
        ))}
      </ul>
    </div>
  )
}
