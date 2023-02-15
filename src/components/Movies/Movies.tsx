import React from "react";
import Movie from "./Movie/Movie";
import { movieType } from "../../types/movie";
import { Box } from "@mui/material";

interface Props {
  movies: movieType[];
}

const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <Box
      sx={{
        minWidth: "600px",
        width: "60%",
      }}
    >
      {movies.map((movie, index) => (
        <Movie key={movie.title + index} movie={movie} />
      ))}
    </Box>
  );
};

export default Movies;
