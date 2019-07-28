import search from './models/Search';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';
import * as recipeView from './views/recipeView';


const state = {};

const searchControl = async () => {
    var query = searchView.elements.search_input.value;
    if(query){
        searchView.elements.search_button.disabled = true;
        searchView.clearList();
        state.search = new search(query);
        searchView.spinner(searchView.elements.section_result);
        await state.search.Recipes();
        searchView.clear();
        searchView.hideSpinner();
        if(state.search.result.length === 0){
            alert('Sorry no such recipe found');
        }
        searchView.elements.search_button.disabled = false;
        searchView.render(state.search.result);
        console.log(searchView.elements.list_item);
    }
}

const recipeControl = async () => {
    let id = window.location.hash.replace('#','');
    if(id){
        recipeView.recipeElements.itemPane.innerHTML = '';
        state.Recipe = new Recipe(id);
        recipeView.ItemSpinner(recipeView.recipeElements.itemPane);
        await state.Recipe.RecipeCall();
        recipeView.hideItemSpinner();
        recipeView.renderItem(state.Recipe.data);
    }
}



window.addEventListener('hashchange',recipeControl);
searchView.elements.search_button.addEventListener('click', function(){
    searchControl();
})
