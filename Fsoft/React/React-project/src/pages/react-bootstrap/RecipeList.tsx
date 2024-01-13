import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { Recipe } from './recipe.types';

const RecipeList = (props: {recipes: Recipe[]}) => {
    const vaigate = useNavigate();

    const handleRecipeClick = (recipeId: string) => {

    }
  return (
    <ListGroup>
        {props.recipes.map((recipe) => (
            <ListGroup.Item key={recipe.id} className='list-groip-item list group-item-action' onClick={() => handleRecipeClick(recipe.id)}>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4 className='mb-1'>{recipe.name}</h4>
                        <p>{recipe.description}</p>
                    </div>
                    <div>
                        <img src={recipe.imgUrl} alt={recipe.name} width={50} height={50} />
                    </div>
                </div>
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default RecipeList