import CardList from "./components/CardList/CardList"
import FavoritesFilter from "./components/FavoritesFilter/FavoritesFilter"
import { Provider } from "react-redux"
import store from "./store"

import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <article className="App">
        <h1 className="headline">Список карточек:</h1>

        <FavoritesFilter />
        <CardList />
      </article>
    </Provider>
  )
}

export default App
