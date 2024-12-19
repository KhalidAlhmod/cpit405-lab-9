import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const params = useParams();
    const id = params.id;
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b38584a2913b4237b5565a64bc93c1fe`); // Add the API URL here
            const responseJson= await response.json();
            setRecipeDetails(responseJson)
        }
        fetchRecipe();

    }, [id])

    return (
        recipeDetails && (
            <div className="recipe-details">
                <h1>{recipeDetails.title}</h1>
                <img src={recipeDetails.image} alt={recipeDetails.title} />
                <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></div>
                <h2>Ingredients</h2>
                <ul>
                    {recipeDetails.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipeDetails.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                    ))}
                </ol>
            </div>
        )
    );
    
}


export default RecipeDetails;
