class Recipe {
	constructor(data) {
	  this.id = data.id;
	  this.name = data.name;
	  this.servings = data.servings;
	  this.ingredients = data.ingredients;
	  this.description = data.description;
	  this.time = data.time;
	}
      
	createHtml() {
	  return `
	  <article class="box">
	     <div class="image">
	     <img
	      src="./images/placeholder-img.svg"
	      alt="Les Petits Plats"
	      aria-label="Les Petits Plats"
	    />
	     </div>
	    <div class="text">
	      <div class="title">
		<div class="name">${this.name}</div>
		<div class="time"><i class="far fa-clock"></i>${this.time} min</div>
	      </div>
	      <div class="details">
		<div class="ingredients">${this.ingredients
		  .map((ingredient) => {
		    let ingredientUnit = ingredient.unit ? ingredient.unit : "";
		    let quantityUnit = ingredient.quantity
		      ? ": " + ingredient.quantity
		      : "";
		    return `<ul>
		       <li>${ingredient.ingredient} ${quantityUnit}${ingredientUnit}</li>
		     </ul>
		     `;
		  })
		  .join("")}
		
		</div>
		<div class="description">${this.description}</div>
	      </div>
	    </div>
	    </article>
	      `;
	}
}