import React from "react"
function Main(){
    /* make ingredients as state variable */ 
    let [ingredients, setIngredients] = React.useState([])
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    let ingredientListElements = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" name="ingredient" aria-label="add ingredient" placeholder="e.g. oregano" />
                <button>Add ingredient</button>
            </form>
            <ul className="ingredients-list">
                {ingredientListElements}
            </ul>
        </main>
    )
}
export default Main