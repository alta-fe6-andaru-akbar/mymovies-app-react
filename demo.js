let favorite = [];

function setFavorite(array) {
  favorite = array;
}

console.log(favorite);
setFavorite([
  { id: 1, name: "ra" },
  { id: 2, name: "da" },
]);
console.log(favorite);
setFavorite(favorite.filter((item) => item.id !== 1));
console.log(favorite);
