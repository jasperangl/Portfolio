import React, {useEffect, useState} from 'react';
import RecipeComp from './RecipeComponent';
import './Recipe.css';

// A Recipe Page
const Recipes = () => {

    // Have to make these invisible when going public
    const APP_ID = '7403e425';
    const APP_KEY = '4d5bcb5e324134a0ee0fc9f80b1c8e76';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect( () =>{
        getRecipes();
    }, [query]);

    // gets and sets the recipes from the online resource
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json(); // formats it
        setRecipes(data.hits);
        console.log(data.hits);
    }

    // updates what we are searching for
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    // fetches data only when search button is pressed
    // assigns the query we are searching for ex:"chicken"
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch('');
    }

    return(
        <div className="recipe-App">
            <h3 className='recipe-header'>This is a search machine for any recipe you want</h3>
            <form onSubmit={getSearch} className="search-form">
                <input type='text' className="search-bar" type="text" placeholder='Your favorite recipe...'value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe =>(
                    <RecipeComp 
                    key={recipe.recipe.label} 
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}/>
                    
                ))}
            </div>
        </div>
    )
}

export default Recipes;