import React, { Component } from "react";
import { Card } from "../components/Card";
// import CustomHeader from "../components/Header";
import axios from "axios";
import { withRouter } from "../utils/navigation";

import "../styles/App.css";

class Homepage extends Component {
  state = {
    data: [],
    title: "WELCOME",
    dataMovie: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  handleClick(item) {
    const temp = this.state.dataMovie.slice();
    temp.push(item);
    this.setState({ dataMovie: temp, title: item.title });
  }

  // simulasi pemanggilan api
  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1b8016b589f965c11ccd5727c94d80a1&language=en-US&page=1"
      )
      .then((res) => {
        const { results } = res.data;
        this.setState({ data: results });
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
        {this.state.data.map((item) => (
          <Card
            key={item.id}
            titleItem={item.title}
            imgItem={item.poster_path}
            onClickItem={() => this.props.navigate(`/movie/${item.id}`)}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(Homepage);
