import React, { useEffect } from "react"
import Card from "../Card/Card"
import { connect } from "react-redux"
import { getCards } from "../../actions/cardsActions"

import PropTypes from "prop-types"

import "./CardList.css"

const CardList = ({
  cardList: { cards, favorites, isFilteredByFavorites },
  getCards,
}) => {
  useEffect(() => {
    getCards()
    //eslint-disable-next-line
  }, [])

  if (isFilteredByFavorites) {
    const filteredCards = cards.filter((card) => favorites.includes(card.id))

    return (
      <ul className="card-list">
        {cards !== null &&
          filteredCards.map((item) => {
            console.log(item, favorites)
            return <Card key={item.id} item={item} />
          })}
      </ul>
    )
  }

  return (
    <ul className="card-list">
      {cards !== null &&
        cards.map((item) => <Card key={item.id} item={item} />)}
    </ul>
  )
}

CardList.propTypes = {
  cardList: PropTypes.object.isRequired,
  getCards: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cardList: state.cardList,
})

export default connect(mapStateToProps, { getCards })(CardList)
