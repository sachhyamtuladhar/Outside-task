import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavouriteButton from "../components/Movies/Movie/FavouriteButton/FavouriteButton";
import "@testing-library/jest-dom";
import { addToFavourite } from "../api/favourites";
import { act } from "react-dom/test-utils";

jest.mock("../api/favourites");

function renderFavouriteButton() {
  return render(<FavouriteButton />);
}

describe("FavouriteButton", () => {
  it("renders a button", () => {
    const { getByText } = renderFavouriteButton();
    const button = getByText("Add to Favourites");
    expect(button).toBeInTheDocument();
  });

  it("calls addtofavourites api when button is clicked", async () => {
    const { findByText } = renderFavouriteButton();
    const button = await findByText("Add to Favourites");
    await act(async () => {
      fireEvent.click(button);
    });
    expect(addToFavourite).toHaveBeenCalledTimes(1);
    expect(addToFavourite).toHaveBeenCalledWith();
  });
});
