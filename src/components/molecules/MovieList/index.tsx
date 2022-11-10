import React from "react";
import MovieCard from "../MovieCard";

interface MovieListProps {
  movies?: any;
}
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-2 mt-4">
      {movies?.length > 0 ? (
        movies?.map((movie: any, key: any) => (
          <MovieCard
            key={key}
            id={movie.id}
            background_image={movie.medium_cover_image}
            title={movie.title}
            language={movie.en}
            year={movie.year}
          />
        ))
      ) : (
        <h2>Nothing to show</h2>
      )}
    </div>
  );
};

export default MovieList;
