export const addToFavourite = () =>
new Promise((resolve) =>
  setTimeout(() => {
    resolve(Math.random() > 0.5);
  }, 1000)
);