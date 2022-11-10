import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./components/molecules/Movies";
import Series from "./components/molecules/Series";
import MoviePage from "./components/molecules/MoviePage";
function App() {
  return (
    <div>
      <div className="flex bg-gray-800 text-white w-full h-20 items-center justify-between rounded-md px-2">
        <Link to="/">
          <div>
            <img
              src={reactLogo}
              alt="react-logo"
              className="h-10 w-10 object-contain"
            />
          </div>
        </Link>
        <div className=" h-full items-center flex">
          <Link to="/movies">
            <p className="text-lg font-semibold cursor-pointer px-4 hover:text-yellow-500">
              Movies
            </p>
          </Link>
          <Link to="/series">
            <p className="text-lg font-semibold cursor-pointer px-4 hover:text-yellow-500">
              Series
            </p>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
