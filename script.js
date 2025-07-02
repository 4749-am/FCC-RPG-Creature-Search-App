const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  if (searchInput.value = "Red") {
    alert("Creature not found");
  }
  return;
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
  return;
})
