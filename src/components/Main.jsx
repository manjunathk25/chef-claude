import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
function Main(){
    /* make ingredients as state variable */ 
    let [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState(false)
    function getRecipe(){
        setRecipeShown(prevShown => !prevShown)
    }
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" name="ingredient" aria-label="add ingredient" placeholder="e.g. oregano" />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipeShown && <ClaudeRecipe />}    
        </main>
    )
}
export default Main