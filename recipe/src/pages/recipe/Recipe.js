import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p>{error}</p>}
      {isPending && <p className='loading'>Loading&hellip;</p>}
      {recipe && (
        <>
          <h2 className='recipe-title'>{recipe.title}</h2>
          <p className='recipe-time'>Takes {recipe.cookingTime} to cook.</p>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul className='all-ingredients'>
              {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
          </div>

          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}