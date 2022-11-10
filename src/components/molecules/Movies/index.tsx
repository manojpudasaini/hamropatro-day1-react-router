import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../MovieList";
import { fetchMovieData } from "../../../utils/movieAPI";

const Movies = () => {
  const [movieList, setMovieList] = useState<any>();

  const fetchMovieDataaa = async () => {
    try {
      const response: any = await axios.get(
        "https://yts.mx/api/v2/list_movies.json"
      );
      setMovieList(response?.data?.data?.movies);
    } catch (error) {
      console.log(error);
    }
    // fetchMovieData().then((data: any) =>
    //   setMovieList(data?.data?.data?.movies)
    // );
  };
  useEffect(() => {
    fetchMovieDataaa();
  }, []);
  console.log("movies>>>", movieList);
  return (
    <div>
      <MovieList movies={movieList} />
    </div>
  );
};

export default Movies;
