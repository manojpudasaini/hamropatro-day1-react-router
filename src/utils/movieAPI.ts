import axios from "axios";

export const fetchMovieData = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://yts.mx/api/v2/movie_details.json")
      .then((resp: Object) => resolve(resp))
      .catch((error) => reject(error));
  });
};

export const fetchSingleMovieData = async (id: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)
      .then((resp: Object) => resolve(resp))
      .catch((error) => reject(error));
  });
};
