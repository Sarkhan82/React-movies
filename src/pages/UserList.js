import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr_FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div clasName="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
        <div className="result">
          {listData.length > 0 ? (
            listData.map((movie) => <Card movie={movie} key={movie.id} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </h2>
    </div>
  );
};

export default UserList;
