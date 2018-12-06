import React from 'react'
import Proportions from './Proportions'
import image from '../cocktailimg/bloody-mary.jpg'

const CocktailSpecs = (props) => {
  const { cocktail } = props
  console.log('in cocktail specs', cocktail)

    if(cocktail === null){
      return(
        <div>
          loading...
        </div>
      )
    } else {
      const cocktailInfo = cocktail.proportions
      // console.log(cocktail.proportions)
          return(
            <div className='cocktail-info'>
              <img src={image} alt='bloody-mary'/>
              <h1>{cocktail.name}</h1>
              {/* <h3>{cocktail.description}</h3>
              <p>{cocktail.instructions}</p><br/> */}
              <Proportions cocktailInfo={cocktailInfo} />

            </div>
          )
      }
    }

export default CocktailSpecs
