import axios from 'axios';
export default class fetchResults{
    constructor(query){
        this.query = query; 
    }

    async Recipes(){
        const key = 'ebf8f760c72fe1fb212ff4faf22d4734';
        try{
            const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = (result.data.recipes);
        }
        catch(err){
            console.log(err);
        }
       
        // console.log(this);
    }
}
