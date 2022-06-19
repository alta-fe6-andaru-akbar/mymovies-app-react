import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Card } from "../components/Card";

const Homepage = (props) => {
  const { movies, loading } = useContext(MoviesContext);
  console.log(movies);
  document.body.style.background = "none";
  return loading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
      {movies.map((item) => (
        <Card key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Homepage;
