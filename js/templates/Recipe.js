class Recipe {
	constructor(data) {
	  this.id = data.id;
	  this.name = data.name;
	  this.time = data.time;
	  this.ingredients = data.ingredients;
	  this.description = data.description;
	  this.cardWrapper = document.getElementById("recipes")
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
	    `
      
	  return html;
	}
      
	secondBuilder = () => {
	  let html = ''
      
	  this.ingredients.forEach(obj => {
	    
	    html += '<li>'
      
	    if (obj.hasOwnProperty('ingredient')) {
	      html += `<span class="composant">${obj.ingredient} : </span>`
	    }
      
	    if (obj.hasOwnProperty('quantity')) {
	      html += `<span class="composant_results">${obj.quantity} </span>`
	    }
      
	    if (obj.hasOwnProperty('unit')) {
	      html += `<span class="composant_results">${obj.unit} </span>`
	    }
      
	    html += '</li>'
	  })
      
	  return html
	}
      
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
	  li.innerHTML = this.firstBuilder() + this.secondBuilder() + this.thirdBuilder();
	  this.cardWrapper.appendChild(li);
	};
      }