import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./assets/IMDB_Logo_2016.svg";
import { optionsRapidAPI } from "./conf";
import { IDataIMDB, IIMDB } from "./types/IMDB";

function App() {
  const [titleMovie, setTitleMovie] = useState("");
  const [movies, setMovies] = useState<IDataIMDB[]>([]);

  useEffect(() => {
    console.debug("App.tsx", process.env);
  }, []);

  useEffect(() => {
    if (!titleMovie) return;

    const timeout = setTimeout(() => {
      fetch(
        `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURI(titleMovie)}`,
        optionsRapidAPI
      )
        .then((response) => response.json())
        .then((response: IIMDB) => {
          setMovies(response.d.slice(1));
        })
        .catch((err) => console.error(err));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [titleMovie]);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex items-center">
        <Logo width={"300px"} />
      </div>
      <input
        className="border border-gray-200 rounded p-2 mt-1"
        type="text"
        value={titleMovie}
        onChange={(event) => setTitleMovie(event.target.value)}
        placeholder="Search a movie or an actor"
      />
      <section className="mt-10 py-10 px-12 w-10/12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <img
                className="w-32 h-32 rounded-full"
                src={movie.i.imageUrl}
                alt={movie.l}
              />
              <h2 className="mt-2 text-lg font-semibold text-center text-gray-800 dark:text-white">
                {movie.l}
              </h2>
              <p className="mt-1 text-sm text-center text-gray-500 dark:text-gray-400">
                {movie.s}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
