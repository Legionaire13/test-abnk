import React, { useState } from "react"
import { connect } from "react-redux"
import {
  addCardToFavorites,
  removeCardFromFavorites,
  deleteCard,
} from "../../actions/cardsActions"
import Button from "../Button/Button"
import PropTypes from "prop-types"

import "./Card.css"

const Card = ({
  cardList: { favorites },
  item,
  addCardToFavorites,
  removeCardFromFavorites,
  deleteCard,
}) => {
  const { login, id, avatar_url } = item
  const [isActive, setIsActive] = useState(false)
  const onLike = () => {
    if (isActive === false) {
      setIsActive(true)
      return addCardToFavorites(id)
    }
    if (isActive === true) {
      setIsActive(false)
      return removeCardFromFavorites(id)
    }
  }

  const onDelete = () => {
    if (favorites.includes(id)) {
      removeCardFromFavorites(id)
    }

    return deleteCard(id)
  }

  return (
    <li className="card">
      <img
        className="card__img"
        src={avatar_url}
        width="60"
        alt="аватар пользователя"
      />
      <h2 className="card__login">{login}</h2>
      <Button type={"like"} onLike={onLike} isActive={isActive} />
      <Button type={"delete"} onDelete={onDelete} />
    </li>
  )
}

Card.propTypes = {
  cardList: PropTypes.object.isRequired,
  addCardToFavorites: PropTypes.func.isRequired,
  removeCardFromFavorites: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cardList: state.cardList,
})

export default connect(mapStateToProps, {
  addCardToFavorites,
  removeCardFromFavorites,
  deleteCard,
})(Card)
