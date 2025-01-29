import React from "react"
function Main(){
    /* make ingredients as state variable */ 
    let [ingredients, setIngredients] = React.useState([])
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
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
            {ingredients.length > 0 &&
                <section>
                    <h2 className="ingredients-heading">Ingredients on hand:</h2>
                    <ul className="ingredients-list">{ingredientListElements}</ul>
                    {ingredients.length > 3 && 
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    }
                </section>
            }       
        </main>
    )
}
export default Main