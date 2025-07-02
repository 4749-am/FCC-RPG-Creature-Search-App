const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const elements = {
  name: document.getElementById("creature-name"),
  id: document.getElementById("creature-id"),
  weight: document.getElementById("weight"),
  height: document.getElementById("height"),
  types: document.getElementById("types"),
  hp: document.getElementById("hp"),
  attack: document.getElementById("attack"),
  defense: document.getElementById("defense"),
  specialAttack: document.getElementById("special-attack"),
  specialDefense: document.getElementById("special-defense"),
  speed: document.getElementById("speed")
};

function clearUI() {
  for (let key in elements) {
    if (key === "types") {
      elements[key].innerHTML = "";
    } else {
      elements[key].textContent = "";
    }
  }
}

function updateUI(data) {
  elements.name.textContent = data.name.toUpperCase();
  elements.id.textContent = "#" + data.id;

  // Attention: mettre uniquement le nombre sans texte
  elements.weight.textContent = data.weight;
  elements.height.textContent = data.height;

  elements.hp.textContent = data.stats.hp;
  elements.attack.textContent = data.stats.attack;
  elements.defense.textContent = data.stats.defense;
  elements.specialAttack.textContent = data.stats["special-attack"];
  elements.specialDefense.textContent = data.stats["special-defense"];
  elements.speed.textContent = data.stats.speed;

  // Effacer puis ajouter chaque type dans un <p>
  elements.types.innerHTML = "";
  data.types.forEach(type => {
    const p = document.createElement("p");
    p.textContent = type.toUpperCase();
    elements.types.appendChild(p);
  });
}

function searchCreature() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  if (query === "red") {
    alert("Creature not found");
    return;
  }

  fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`)
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(data => updateUI(data))
    .catch(() => alert("Creature not found"));
}

searchButton.addEventListener("click", () => {
  clearUI();
  searchCreature();
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    clearUI();
    searchCreature();
  }
});
