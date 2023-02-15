import React from "react";
import { render, fireEvent, findByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import { movieType } from "../types/movie";
import Movie from "../components/Movies/Movie/Movie";
import { act } from "react-dom/test-utils";

interface Props {
  movie: movieType;
}
function renderMovies() {
  const defaultProps: Props = {
    movie: {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.",
      genre: "Space",
      director: {
        name: "Christopher Nolan",
        description:
          "Christopher Edward Nolan CBE is a British-American filmmaker. Known for his Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $5 billion worldwide.",
      },
      imagePath: "/images/interstellar.jpg",
    },
  };
  return render(<Movie {...defaultProps} />);
}

describe("Movies", () => {
  it("renders a movie with given director and title", () => {
    const { getByText } = renderMovies();
    const title = getByText("Interstellar");
    const director = getByText("Christopher Nolan");

    expect(title).toBeInTheDocument();
    expect(director).toBeInTheDocument();
  });
  it("shows description when title is clicked", async () => {
    const { getByText } = renderMovies();
    const title = getByText("Interstellar");
    const description = getByText(
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind."
    );
    expect(description).not.toBeVisible();
    await act(async () => {
      fireEvent.click(title);
    });
    expect(description).toBeVisible();
  });
});
