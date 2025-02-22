class Recipe {
  //Parent
  constructor(data) {
    //Argument
    this.id = data.id; //Le mot clé this commence à faire référence au nouvel objet et il devient l'objet d'instance actuel. Le nouvel objet est ensuite renvoyé comme valeur de retour du constructeur.
    this.name = data.name;
    this.time = data.time;
    this.ingredients = data.ingredients;
    this.description = data.description;
    this.cardWrapper = document.getElementById("recipes");
  }

  firstBuilder = () => {
    const html = `  
	    <article class="card-container">
		<div class="card_image-container">
		</div>
		<div class="card_items-container">
		    <div class="card_items-title">
			<h3 class="recipe-title">${this.name}</h3>
			<p>
			    <span class="clock">
				<i class="fa-regular fa-clock"></i>
			    </span>
			    <span class="recipe-duration">
				${this.time}
			    </span>
			    <span>min</span>
			</p>
		    </div>
		    <div class="card_items-recipe">
			<ul class="recipes_ingredients-list">
	    `;

    return html;
  };

  secondBuilder = () => {
    let html = "";

    this.ingredients.forEach((obj) => {
      //La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
      html += "<li>";

      if (obj.hasOwnProperty("ingredient")) {
        //hasOwnProperty() retourne un booléen indiquant si l'objet possède la propriété spécifiée, sans que celle-ci provienne de la chaîne de prototypes de l'objet.
        html += `<span class="composant">${obj.ingredient} : </span>`;
      }

      if (obj.hasOwnProperty("quantity")) {
        html += `<span class="composant_results">${obj.quantity} </span>`;
      }

      if (obj.hasOwnProperty("unit")) {
        html += `<span class="composant_results">${obj.unit} </span>`;
      }

      html += "</li>";
    });

    return html;
  };

  thirdBuilder = () => {
    const html = `
		    </ul>
		    <div class="recipe_description">
		      <p>
			${this.description}
		      </p>
		    </div>
		  </div>
		</div>
	      </article>
	  `;
    return html;
  };

  render = () => {
    const li = document.createElement("li");
    li.innerHTML =
      this.firstBuilder() + this.secondBuilder() + this.thirdBuilder();
    this.cardWrapper.appendChild(li);
  };
}
