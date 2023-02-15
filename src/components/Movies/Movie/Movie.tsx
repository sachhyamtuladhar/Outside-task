import React, { SyntheticEvent, useState } from "react";
import { movieType } from "../../../types/movie";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Box, Button } from "@mui/material";
import DirectorModal from "./DirectorModal/DirectorModal";
import FavouriteButton from "./FavouriteButton/FavouriteButton";

interface Props {
  movie: movieType;
}

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <Accordion
      sx={{
        my: 2,
        boxShadow: "none",
        "&:hover": {
          boxShadow:
            "0px 4px 8px -1px rgb(0 0 0 / 20%), 0px 4px 8px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <img
            src={movie.imagePath}
            alt={movie.title}
            loading="lazy"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2, pl: 4 }}>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {movie.genre}
            </Typography>
            <DirectorModal
              name={movie.director.name}
              description={movie.director.description}
            >
              {movie.director.name}
            </DirectorModal>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{movie.description}</Typography>
        <Box sx={{ display: "flex", m: 2, justifyContent: "center" }}>
          <FavouriteButton />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Movie;
