import React, { Component, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { withRouter } from "../utils/navigation";

class Detail extends Component {
  state = {
    data: {},
    title: "WELCOME",
    dataMovie: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { movie_id } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1b8016b589f965c11ccd5727c94d80a1&language=en-US`
      )
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${this.state.data.poster_path}')`;
    console.log(this.state.data);
    const { data, loading } = this.state;
    if (loading) {
      return <div className="text-center mt-24">Loading...</div>;
    } else {
      return (
        <div className="w-full min-h-screen">
          <div className="py-10 text-dark w-1/2 mx-auto text-center font-bold text-2xl rounded">
            <div className="detail-title px-5 py-8">Detail Movie</div>
          </div>
          <div className="flex flex-col max-w-xl py-4 shadowlg shadow-black detail-body my-3 m-auto rounded-xl">
            <div className="font-bold p-2 m-auto text-lg">{data.title}</div>
            <div>
              <img
                className="m-auto rounded-sm py-3"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="p-2 px-10">
              <span className="font-bold">Runtime: </span>
              {data.runtime} <span>minutes</span>
            </div>
            <div className="p-2 px-10">
              <span className="font-bold">Release Date: </span>
              {data.release_date}
            </div>
            <p className="p-2 px-10">
              <span className="font-bold">Genre:</span>
            </p>
            {data.genres.map((item) => (
              <div key={item.id} className="p-1 px-10">
                <p>{item.name}</p>
              </div>
            ))}
            <div className="p-2 px-10">
              <span className="font-bold">Overview: </span>
              {data.overview}
            </div>
            <div className="p-2 px-10">
              <span className="font-bold">Avarage: </span>
              {data.vote_average}
            </div>
            <div className="p-2 px-10">
              <span className="font-bold">Popularity: </span>
              {data.popularity}
            </div>
          </div>
        </div>
      );
    }
  }
}

// const Details = ({ params }) => {
//   const [data, setData] = useState({});
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
// };

export default withRouter(Detail);
