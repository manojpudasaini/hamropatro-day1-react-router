import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchSingleMovieData } from "../../../utils/movieAPI";

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<Object>();
  console.log(fetchSingleMovieData(id));
  useEffect(() => {
    fetchSingleMovieData(id).then((res: any) =>
      setMovieDetails(res?.data?.data?.movie)
    );
  }, [id]);

  console.log(id, movieDetails);
  return <div>MoviePage</div>;
};

export default MoviePage;
