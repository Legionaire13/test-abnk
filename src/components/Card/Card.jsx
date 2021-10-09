import React from "react"
import Button from "../Button/Button"
import "./Card.css"

const Card = ({ item, onDelete }) => {
  const { login, id, avatar_url } = item
  return (
    <li className="card">
      <img
        className="card__img"
        src={avatar_url}
        width="60"
        alt="аватар пользователя"
      />
      <h2 className="card__login">{login}</h2>
      <Button type={"like"} />
      <Button type={"delete"} id={id} onDelete={onDelete} />
    </li>
  )
}

export default Card
