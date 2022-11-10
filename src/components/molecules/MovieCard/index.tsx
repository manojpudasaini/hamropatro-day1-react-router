import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id?: number;
  title?: string;
  url?: string;
  genres?: Array<string>;
  summary?: string;
  language?: string;
  background_image?: string;
  year?: number;
}

const MovieCard = ({
  id,
  title,
  url,
  genres,
  summary,
  language,
  background_image,
  year,
}: MovieCardProps) => {
  return (
    <Link to={"/movie/" + id}>
      <div className="bg-blue-50 py-1 px-2 rounded-lg flex flex-col items-center hover:cursor-pointer hover:shadow-lg duration-200 relative ">
        <img src={background_image} className="object-cover rounded-md" />
        <p className="font-bold p-2 mb-4">{title}</p>
        <p className="text-sm font-mono absolute bottom-0">{year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
