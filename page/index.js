const recipesBoxes = document.getElementById("recipes_boxes");
const search = document.getElementById("site-search");
let recipesArray = [];


// HTML
let div = document.createElement("div");
div.id = "boxes";

let recipesDisplay = (recipes) => {
  recipes.forEach((recipe) => {
    let recipesModel = new Recipe(recipe);
    recipesBoxes.appendChild(div);
    div.innerHTML += recipesModel.createHtml();
  });
};

const init = async () => {
  recipesArray = recipes;

  recipesDisplay(recipes);
};

init();