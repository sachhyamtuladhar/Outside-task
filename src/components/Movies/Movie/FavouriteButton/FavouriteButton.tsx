import { Button, Snackbar } from "@mui/material";
import React from "react";
import { addToFavourite } from "../../../../api/favourites";

const FavouriteButton = () => {
  const [open, setOpen] = React.useState(false);
  const [added, setAdded] = React.useState(false);

  const handleClick = async () => {
    const result = await addToFavourite();
    setOpen(true);
    if (result) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Add to Favourites
      </Button>
      <Snackbar
        data-testid="snackbar"
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={added ? "Added to Favourites" : "Sorry try again!"}
      />
    </>
  );
};

export default FavouriteButton;
