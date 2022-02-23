import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const items = [
    {
      title: "title1",
      subtitle: "subtitle2",
    },
    {
      title: "title2",
      subtitle: "subtitle2",
    },
    {
      title: "title3",
      subtitle: "subtitle3",
    },
    {
      title: "title4",
      subtitle: "subtitle4",
    },
    {
      title: "title5",
      subtitle: "subtitle5",
    },
  ];
  const [popularMovies, setPopularMovies] = useState(items);
  const [filteredMovies, setFilteredMovies] = useState(items);
  const [activeGenre, setActiveGenre] = useState("all");

  useEffect(() => {
    if (activeGenre === "all") {
      setFilteredMovies(popularMovies);
      return;
    }
    if (activeGenre === "comedy") {
      const comedyItems = items.filter((item) => item.title !== "title3");
      setFilteredMovies(comedyItems);
      return;
    }
    if (activeGenre === "action") {
      const actionItems = items
        .filter((item) => item.title !== "title5")
        .filter((item) => item.title !== "title1");
      setFilteredMovies(actionItems);
      return;
    }
  }, [activeGenre]);

  return (
    <div className="App">
      <Filter activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular">
        <AnimatePresence>
          {filteredMovies.map((movie) => {
            return <Movie {...movie} key={movie.title} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
