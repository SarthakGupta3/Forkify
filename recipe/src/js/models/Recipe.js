import axios from 'axios';
export default class getRecipe{
    constructor(id){
        this.id = id;
    }

    async RecipeCall(){
        const key = 'ebf8f760c72fe1fb212ff4faf22d4734';
        try{
            const result = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.data = (result.data.recipe);
        }
        catch(err){
            console.log(err);
        }
    }
}