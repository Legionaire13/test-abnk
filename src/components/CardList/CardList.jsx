import React from "react"
import Card from "../Card/Card"
import "./CardList.css"

const CardList = ({ cards }) => {
  return (
    <ul className="card-list">
      {cards.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CardList
