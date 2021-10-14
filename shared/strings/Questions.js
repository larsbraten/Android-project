let Capital = [
  "Oslo",
  "London",
  "Paris",
  "Amsterdam",
  "Andorra la Vella",
  "Copenhagen",
  "Ankara",
  "Dubai",
  "Minsk",
  "Brussels",
  "Sofia",
  "Tallinn",
  "Kuala Lumpur",
  "Dublin",
];

function drawRandomWord() {
  return Capital[Math.floor(Math.random() * Capital.length)];
}

export { drawRandomWord };
