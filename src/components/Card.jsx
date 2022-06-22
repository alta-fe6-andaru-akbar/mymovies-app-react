import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

// class Card extends Component {
//   render() {
//     return (
//       <div className="container grow p-3 flex flex-col bg-zinc-800 md:bg-zinc-500 rounded">
//         <div className="cursor-pointer" onClick={this.props.onClickItem}>
//           <img
//             className="w-60 h-72"
//             src={`https://image.tmdb.org/t/p/w500${this.props.imgItem}`}
//             alt={this.props.imgItem}
//           />
//           {console.log(this.props)}
//           <p className="text-white">{this.props.titleItem}</p>
//           <button className="text-white" onClick={this.props.onClickItem}>
//             Add To Favorite
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const Card = ({ movie }) => {
  const { handleAddFavorite, handleRemoveFavorite, favorite } =
    useContext(MoviesContext);

  const fav = favorite.find((item) => item.id === movie.id);
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="container grow p-3 justify-between bg-zinc-800 md:bg-zinc-500 rounded">
      <div className="cursor-pointer">
        <img
          className="w-60 h-72"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.poster_path}
        />
        <h3 className="text-white font-bold relative">{movie.title}</h3>
        <p className="text-sm text-white relative">
          Release date: {releaseDate}
        </p>
        <div className="flex justify-between">
          <Link to={`/movie/${movie.id}`}>
            <button className="p-2 bg-green-500 text-white rounded-md">
              Details
            </button>
          </Link>
          <button
            className="text-white bg-blue-500 p-2 rounded-md jastify-center"
            onClick={() =>
              fav ? handleRemoveFavorite(movie) : handleAddFavorite(movie)
            }
          >
            {fav ? "Del from favorite" : "Add from favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

// class Card2 extends Component {
//   render() {
//     return (
//       <div className="container grow p-3 flex flex-col bg-zinc-800 md:bg-zinc-500 rounded">
//         <img
//           className="max-w-full h-auto"
//           width="500"
//           height="750"
//           src={this.props.imgItem}
//           alt={this.props.imgItem}
//         />
//         <p className="text-white">{this.props.titleItem}</p>
//         <p className="text-white">{this.props.contentItem}</p>
//       </div>
//     );
//   }
// }

export { Card };
