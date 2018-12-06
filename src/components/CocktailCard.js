import React from 'react'

const CocktailCard = (props) => {
    const { singleCocktail } = props
    console.log(props)
    return(
      <div className="single-cocktail" onClick={() => props.handleClick(singleCocktail)}>
        {singleCocktail.name}
      </div>
    )
  }

export default CocktailCard
