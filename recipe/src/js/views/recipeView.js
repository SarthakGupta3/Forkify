var recipeElements = {
    itemPane: document.querySelector('#item')
}

const ItemSpinner = (parent) => {
    const html = `<div id="Itemspin">
       <img id="Itemloader" src="img/loader.apng">
    </div>`
    parent.insertAdjacentHTML('afterbegin', html);
    recipeElements.spinner = document.querySelector('#Itemspin');
}

const hideItemSpinner = () => {
    recipeElements.spinner.style.display = "none";
} 

const renderItem = (item) => {
    var html = `<div id="item_title"><h2 style="color:#7CD081">${item.title}</h2>
    </div>
    <div>
    <img id="item_image" src="${item.image_url}">
    </div>
    <div id="item_ingred"><h3 style="color:#7CD081">Ingredients</h3>
    </div>
    <ul id="ingredients">
    </ul>`;
    recipeElements.itemPane.insertAdjacentHTML('afterbegin',html);
    recipeElements.ingredientsList = document.querySelector('#ingredients');
    console.log(recipeElements.ingredientsList);
    for(let i=0;i<item.ingredients.length;i++){
        var ingredient = `<li class="ingredient_item">${item.ingredients[i]}</li>`;
        recipeElements.ingredientsList.insertAdjacentHTML('beforeend',ingredient);
    }
}

export{
    renderItem,
    ItemSpinner,recipeElements,
    hideItemSpinner
}