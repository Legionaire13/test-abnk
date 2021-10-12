import React, { useState } from "react"
import Button from "../Button/Button"
import { connect } from "react-redux"
import { toggleFilterByFavorites } from "../../actions/cardsActions"
import PropTypes from "prop-types"

import "./FavoritesFilter.css"

const FavoritesFilter = ({ toggleFilterByFavorites }) => {
  const [isActive, setIsActive] = useState(false)

  const onFilter = () => {
    setIsActive(!isActive)
    toggleFilterByFavorites()
  }

  return (
    <div className="favorites-filter">
      <Button type={"filter"} isActive={isActive} onFilter={onFilter} />
    </div>
  )
}

FavoritesFilter.propTypes = {
  toggleFilterByFavorites: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cardList: state.cardList,
})

export default connect(mapStateToProps, { toggleFilterByFavorites })(
  FavoritesFilter
)
