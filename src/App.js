import CardList from "./components/CardList/CardList"
import FavoritesFilter from "./components/FavoritesFilter/FavoritesFilter"

import "./App.css"
import mock from "./mock.json"

function App() {
  return (
    <article className="App">
      <h1 className="headline">Список карточек:</h1>

      <FavoritesFilter />
      <CardList cards={mock} />
    </article>
  )
}

export default App
