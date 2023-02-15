import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Movies from "./Movies/Movies";
import { movieType } from "../types/movie";

const App: React.FC = () => {
  const movieData: movieType[] = [
    {
      title: "Raghuveer",
      description:
        "Raghuveer murders Indira's father and blames Harsha. When Harsha sets out to his clear his name, he recalls his previous life from 400 years ago and his connection to them. In 1609 AD, Mitravinda, a princess, and Kala Bhairava, the warrior that she loved, die. 400 years later, the warrior is reincarnated as Harsha, a motorcycle stuntman. He brushes hands with a girl and sparks fly as he begins to recall his past life. Knowing that he is destined to love this young woman, he sets about trying to identify her. Indu does not remember her past life and keeps Harsha at a distance; playing tricks on him until she gets to know him better. However, just as the two begin to fall in love, a sinister force from their shared past returns!",
      genre: "Telegu",
      director: {
        name: "S. S. Rajamouli",
        description:
          "Koduri Srisaila Sri Rajamouli is an Indian film director and screenwriter who primarily works in Telugu cinema. He is the highest paid director in India, and is known for his action, fantasy, and epic genre films.",
      },
      imagePath: "/images/raghuveer.jpg",
    },
    {
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
    {
      title: "Coco",
      description:
        "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history. Coco is a 2017 American computer-animated fantasy film produced by Pixar Animation Studios and released by Walt Disney Pictures. Based on an original idea by Lee Unkrich, it is directed by him and co-directed by Adrian Molina. The film's voice cast stars Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach, Renée Victor, Ana Ofelia Murguía and Edward James Olmos. The story follows a 12-year-old boy named Miguel (Gonzalez) who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music.",
      genre: "Animated",
      director: {
        name: "Adrian Molina, Lee Unkrich",
        description:
          "Adrian Molina is an American animator, storyboard artist, screenwriter, director, and lyricist. He has been at Pixar since 2007, where he started as a 2D animator on Ratatouille. He later moved on to be a storyboard artist, working on Toy Story 3 and Monsters University.",
      },
      imagePath: "/images/coco.jpg",
    },
  ];
  return (
    <div>
      <Movies movies={movieData} />
    </div>
  );
};

export default App;
