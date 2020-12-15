import "./App.css";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
