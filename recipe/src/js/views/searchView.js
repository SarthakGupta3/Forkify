var elements ={
    search_input : document.querySelector('#recipe-search'),
    search_button: document.querySelector('#search-click'),
    Recipe_list:document.querySelector('#results-list'),
    section_result:document.querySelector('#results'),
}

const render = (recipeArray) =>{
    recipeArray.forEach(el =>{
        renderResults(el);
});
}

const clear =() =>{
    elements.search_input.value='';
}

const clearList = () =>{
    elements.Recipe_list.innerHTML = '';
}

const spinner = (parent) => {
    const html = `<div id="spin">
       <img id="loader" src="img/loader.apng">
    </div>`
    parent.insertAdjacentHTML('afterbegin', html);
    elements.spinner = document.querySelector('#spin');
}

const hideSpinner = () => {
    elements.spinner.style.display = "none";
}

const renderResults = (el) => {
    const html = `<li class="list_item"><a class="list_item_link" href="#${el.recipe_id}"><figure><img  class="icon" src="${el.image_url}"></figure><div class="content"><div class="title"><p class="item_title">${el.title}</p></div><div class="publisher"><p class="item_publisher">${el.publisher}</p></div></div></a></li>`;
    elements.Recipe_list.insertAdjacentHTML('beforeend', html);
}

export {
    elements,
    render,
    clear,
    clearList,
    spinner,
    hideSpinner
}

