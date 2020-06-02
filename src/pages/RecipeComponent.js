import React from 'react';
import './Recipe.css';


// A single recipe component inside our recipe page.
const RecipeComp = ({title,calories,image, ingredients}) => {



    return(
        <div className='recipe-comp'>
            <div className='recipe-box'>
                <h1 className='recipe-title'>{title}</h1>
                <ol className='recipe-list'>
                    {ingredients.map(ingredient =>(
                        <li className='recipe-ingredient'>{ingredient.text}</li>
                    ))}
                </ol>
                <p className='recipe-calories'>{parseInt(calories, 10)}kcal</p>
                <img className='recipe-img' src={image} alt="" />
            </div>
        </div>
    )
}

export default RecipeComp;