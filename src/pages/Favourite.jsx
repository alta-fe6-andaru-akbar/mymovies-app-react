import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Card } from "../components/Card";

const Favorite = () => {
  const { favorite } = useContext(MoviesContext);
  return (
    <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
      {favorite.map((item) => (
        <Card key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default Favorite;
