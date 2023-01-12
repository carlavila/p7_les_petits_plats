class Catalogue {
	constructor(data) {
	  this.$recipes = document.getElementById("recipes");
	  this.$ingredients = document.getElementById("ingredients-wrap");
	  this.$appliances = document.getElementById("appliances-wrap");
	  this.$ustensils = document.getElementById("ustensils-wrap");
	  this.$tagsFilterBtn = document.querySelectorAll(".search-btn");
	  this.$ingredientSearchInput = document.getElementById(
	    "ingredient-filter-btn"
	  );
	  this.$applianceSearchInput = document.getElementById(
	    "appliance-filter-btn"
	  );
	  this.$ustensilSearchInput = document.getElementById("ustensil-filter-btn");
	  this.catalogue = data;
	  this.catalogueFiltred = data;
	  this.catalogueTaged = new Array();
	  this.ingredients = new Array();
	  this.appliances = new Array();
	  this.ustensils = new Array();
	  this.ingredientsTags = new Array();
	  this.appliancesTags = new Array();
	  this.ustensilsTags = new Array();
	  this.init();
	}
      
	/* Init */
      
	init = () => {
	  this.searchBar();
	  this.tagsFilterBtn();
	  this.tag();
	};
      
	/* Init searchBar */
	searchBar = () => {
	  const $searchBar = document.getElementById("search-bar");
	  $searchBar.addEventListener("keyup", (e) => {
	    const query = e.target.value;
	    if (e.target.value.length > 2) {
	      this.filter(query.toLowerCase());
	      this.tag();
	    } else {
	      this.catalogueFiltred = this.catalogue;
	      this.tag();
	    }
	  });
	};
      
	/* Init tagsFilterBtn */
      
	toggleFilterBtn = (btn) => {
	  if (btn.className === "fa-solid fa-chevron-down") {
	    btn.classList.replace("fa-chevron-down", "fa-chevron-up");
	    btn.parentNode.parentNode.nextElementSibling.classList.replace(
	      "list-hidden",
	      "list-show"
	    );
	  } else {
	    btn.classList.replace("fa-chevron-up", "fa-chevron-down");
	    btn.parentNode.parentNode.nextElementSibling.classList.replace(
	      "list-show",
	      "list-hidden"
	    );
	  }
	};
      
	tagsFilterBtn = () => {
	  /* Arrow Btn */
      
	  this.$tagsFilterBtn.forEach((tagsFilterBtn) => {
	    const arrowBtn = tagsFilterBtn.lastElementChild.firstChild;
	    const input = tagsFilterBtn.firstElementChild;
      
	    arrowBtn.addEventListener("click", (e) => {
	      this.toggleFilterBtn(e.target);
	    });
      
	    input.addEventListener("focus", (e) => {
	      const arrowBtn = e.target.nextElementSibling.firstElementChild;
	      this.toggleFilterBtn(arrowBtn);
	    });
	  });
      
	  /* Filter Ingredients List with InputBtn */
      
	  this.$ingredientSearchInput.addEventListener("keyup", (e) => {
	    if (e.target.value.length > 0) {
	      const ingredientsListFiltred = this.ingredients.filter((items) =>
		items.toLowerCase().includes(e.target.value.toLowerCase())
	      );
      
	      this.$ingredients.innerHTML = "";
	      this.$ingredients.appendChild(
		new FilterBtn(ingredientsListFiltred, "ingredient").render()
	      );
	    } else {
	      this.$ingredients.innerHTML = "";
	      this.$ingredients.appendChild(
		new FilterBtn(this.ingredients, "ingredient").render()
	      );
	    }
	  });
      
	  /* Filter Appliances List with InputBtn */
      
	  this.$applianceSearchInput.addEventListener("keyup", (e) => {
	    if (e.target.value.length > 0) {
	      const appliancesListFiltred = this.appliances.filter((items) =>
		items.toLowerCase().includes(e.target.value.toLowerCase())
	      );
      
	      this.$appliances.innerHTML = "";
	      this.$appliances.appendChild(
		new FilterBtn(appliancesListFiltred, "appliance").render()
	      );
	    } else {
	      this.$appliances.innerHTML = "";
	      this.$appliances.appendChild(
		new FilterBtn(this.appliances, "appliance").render()
	      );
	    }
	  });
      
	  /* Filter Appliances List with InputBtn */
      
	  this.$ustensilSearchInput.addEventListener("keyup", (e) => {
	    if (e.target.value.length > 0) {
	      const ustensilsListFiltred = this.ustensils.filter((items) =>
		items.toLowerCase().includes(e.target.value.toLowerCase())
	      );
      
	      this.$ustensils.innerHTML = "";
	      this.$ustensils.appendChild(
		new FilterBtn(ustensilsListFiltred, "ustensil").render()
	      );
	    } else {
	      this.$ustensils.innerHTML = "";
	      this.$ustensils.appendChild(
		new FilterBtn(this.ustensils, "ustensil").render()
	      );
	    }
	  });
	};
      
	/* Filter with searchBar */
	filter = (query) => {
		this.catalogueFiltred = []
		for(let recipe of this.catalogue) {
		  const recipeIngredientsList = new Array()
		  for (let ingredient of recipe.ingredients) {
		    recipeIngredientsList.push(...ingredient.ingredient.toLowerCase().split(' '))
		  }
	    
		  if(
		    recipe.name.toLowerCase().includes(query) || 
		    recipe.description.toLowerCase().includes(query) ||
		    recipeIngredientsList.includes(query)) {
		    this.catalogueFiltred.push(recipe)
		  }
		}
	      };
	      
	

      
	/* Filter with tags */
	tag = () => {
	  this.catalogueTaged = this.catalogueFiltred;
      
	  /* Filter with ingredients Tags */
	  if (this.ingredientsTags.length > 0) {
	    this.ingredientsTags.map((tag) => {
	      this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
		return recipe.ingredients.some((ingredient) =>
		  ingredient.ingredient.toLowerCase().includes(tag)
		);
	      });
	    });
	  }
      
	  /* Filter with appliances Tags */
	  if (this.appliancesTags.length > 0) {
	    this.appliancesTags.map((tag) => {
	      this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
		return recipe.appliance.toLowerCase().includes(tag);
	      });
	    });
	  }
      
	  /* Filter with ustensils Tags */
	  if (this.ustensilsTags.length > 0) {
	    this.ustensilsTags.map((tag) => {
	      this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
		return recipe.ustensils.some((ustensil) =>
		  ustensil.toLowerCase().includes(tag)
		);
	      });
	    });
	  }
      
	  if (this.catalogueTaged.length > 0) {
	    this.render();
	  } else {
	    const alert = document.createElement("div");
	    const p = document.createElement("p");
	    alert.id = "alert";
	    p.textContent =
	      "Aucune recette ne correspond à vos critères... Vous pouvez chercher « tarte aux pommes ».";
	    alert.appendChild(p);
	    this.$recipes.innerHTML = "";
	    this.$recipes.appendChild(alert);
	  }
	};
      
	/* Render */
	render = () => {
	  /* Update Ingredients */
	  this.ingredients = Array.from(
	    new Set(
	      this.catalogueTaged
		.map((recipe) =>
		  recipe.ingredients.map((recipe) => recipe.ingredient)
		)
		.reduce((prev, curr) => prev.concat(curr))
		.sort()
	    )
	  );
	  /* Remove items taged from List */
	  if (this.ingredientsTags.length > 0) {
	    this.ingredientsTags.forEach((tag) => {
	      this.ingredients.splice(this.ingredients.indexOf(tag.capitalize()), 1);
	    });
	  }
      
	  this.$ingredients.innerHTML = "";
	  this.$ingredients.appendChild(
	    new FilterBtn(this.ingredients, "ingredient").render()
	  );
      
	  /* Update Appliances */
	  this.appliances = Array.from(
	    new Set(this.catalogueTaged.map((recipe) => recipe.appliance).sort())
	  );
      
	  /* Remove items taged from List */
	  if (this.appliancesTags.length > 0) {
	    this.appliancesTags.forEach((tag) => {
	      this.appliances.splice(this.appliances.indexOf(tag.capitalize()), 1);
	    });
	  }
      
	  this.$appliances.innerHTML = "";
	  this.$appliances.appendChild(
	    new FilterBtn(this.appliances, "appliance").render()
	  );
      
	  /* Update Ustensils */
	  this.ustensils = Array.from(
	    new Set(
	      this.catalogueTaged
		.map((recipe) => recipe.ustensils)
		.reduce((prev, curr) => prev.concat(curr))
		.sort()
	    )
	  );
	  /* Remove items taged from List */
	  if (this.ustensilsTags.length > 0) {
	    this.ustensilsTags.forEach((tag) => {
	      this.ustensils.splice(this.ustensils.indexOf(tag.capitalize()), 1);
	    });
	  }
	  this.$ustensils.innerHTML = "";
	  this.$ustensils.appendChild(
	    new FilterBtn(this.ustensils, "ustensil").render()
	  );
      
	  /* Update recepies */
	  this.$recipes.innerHTML = "";
	  this.catalogueTaged.forEach((recipe) => {
	    new Recipe(recipe).render();
	  });
	};
      }