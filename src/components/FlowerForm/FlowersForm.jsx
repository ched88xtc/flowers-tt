import React, {useEffect, useState} from 'react';
import './FlowersForm.css';
import {useDispatch} from "react-redux";

export function FlowersForm() {
  const [newFlowerName, setFlowerName] = useState('');
  const [newFlowerPrice, setFlowerPrice] = useState('');
  const [hasNameErr, setNameErr] = useState(false);
  const [hasPriceErr, setPriceErr] = useState(false);
  const [hasPriceTypeErr, setPriceTypeErr] = useState(false);
  const [hasNameTypeErr, setNameTypeErr] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Form';
  },[])

  const addFlower = (flowerName, flowerPrice) => {
    const newFlower = {
      id: Math.random(),
      name: flowerName,
      price: +flowerPrice,
      checked: false,
    }

    dispatch({type:"ADD_FLOWER", payload: newFlower})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameErr(!newFlowerName);
    setPriceErr(!newFlowerPrice);
    setNameTypeErr(false)
    setPriceTypeErr(false);

    if (!newFlowerName) {
      return;
    }

    if (!newFlowerPrice) {
      return;
    }

    if (!newFlowerName.match(/^[a-zA-Z]+(-[a-zA-Z]+)*$/)) {
      setNameTypeErr(true);
      return;
    }

    if (!newFlowerPrice.match(/^[0-9]+$/)) {
      setPriceTypeErr(true);
      return;
    }

    const changedNewFlowerName = newFlowerName[0].toUpperCase() + newFlowerName.slice(1);

    addFlower(changedNewFlowerName, newFlowerPrice);
    setFlowerName('');
    setFlowerPrice('');
  }

  return (
    <form className="flowersForm" onSubmit={handleSubmit}>
      <div className="flowersInputWrapper">
        {hasNameErr && (
          <span className="inputErr">
              *Name is required field
            </span>
        )}
        {hasNameTypeErr && (
          <span className="inputErr">
              *Name should include letters only
            </span>
        )}
        <input
          className="flowersInput"
          type="text"
          placeholder="What is flower name?"
          autoComplete="off"
          value={newFlowerName}
          onChange={(event => {
            setFlowerName(event.target.value)
            setNameErr(false)
            setNameTypeErr(false)
          })}
        />
      </div>
      <div className="flowersInputWrapper">
        {hasPriceErr && (
          <span className="inputErr">
              *Price is required field
            </span>
        )}
        {hasPriceTypeErr && (
          <span className="inputErr">
              *Price should include numbers only
            </span>
        )}
        <input
          className="flowersInput"
          type="text"
          placeholder="What is flower price?"
          autoComplete="off"
          value={newFlowerPrice}
          onChange={(event => {
            setFlowerPrice(event.target.value)
            setPriceErr(false)
            setPriceTypeErr(false)
          })}
        />
      </div>
      <button type="submit" className="addFlowerBtn">Add flower to the list</button>
    </form>
  )
}
