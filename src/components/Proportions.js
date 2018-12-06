import React from 'react'

const Proportions = (props) => {
  const { cocktailInfo } = props
  const info = cocktailInfo.map(singleCocktail => <li key={singleCocktail.id}><strong>{singleCocktail.amount}</strong> {singleCocktail.ingredient_name}</li>)
  return(
    <div className="ingredients">
      <ul>
        {info}
      </ul>
    </div>
  )
}

export default Proportions
