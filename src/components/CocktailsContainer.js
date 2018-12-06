import React, { Component } from 'react'
import CocktailCard from './CocktailCard'
import CocktailSpecs from './CocktailSpecs'
import CocktailForm from './Form'

const BASE_URL = 'http://localhost:3000/api/v1/cocktails'

class CocktailsContainer extends Component {
  state = {
    allCocktails: [],
    selectedCocktail: []
  }

  componentDidMount(){
    console.log('in did mount')
    this.makeFetch()
  }

  makeFetch = () => {
    console.log('in make fetch')
    fetch(BASE_URL)
    .then(res => res.json())
    .then(res => {
      this.setState({ allCocktails: res.slice(1,11) });
      return this.handleClick(res[0])
    })
    .catch(err => console.log(err))
  }

  handleClick = (res) => {
    console.log('inside of handle click')
    fetch(BASE_URL + `/${res.id}`)
    .then(response => response.json())
    .then(cocktail => this.setState({
      selectedCocktail: cocktail
    }))
  }

  handleSubmit = (newCocktail) => {
    // let newCocktail = {"cocktail": {
    // 	              "name": e.target.name.value,
    //                	"description": e.target.description.value,
    //                	"instructions": e.target.instructions.value,
    //                	"source": e.target.source.value,
    //                	"proportions": [
    //                              		{
    //                              		"ingredient_name": e.target.ingredient.value,
    //                              		"amount": e.target.amount.value
    //                              		}
   	//                 ]}}
    const newCocktailArray = [newCocktail, ...this.state.allCocktails]
    this.setState({
      allCocktails: newCocktailArray
    })

    this.postFetch(newCocktail)

  }

  postFetch = (newCocktail) => {
    console.log('FETCHING', newCocktail)
  fetch(`http://localhost:3000/api/v1/cocktails`,{
    method:'POST',
    body: JSON.stringify(newCocktail),
    headers: {
      'Content-Type': 'application/json'
             }
    }).then(res => res.json())
      .then(res => console.log('in the post fetch request', res))
  }



  render(){
    console.log('in cocktail containers render', this.state)
    const cocktail = this.state.allCocktails.map(singleCocktail => <CocktailCard handleClick={this.handleClick} key={singleCocktail.id} singleCocktail={singleCocktail}/>)
    return(
      <div className="container">
        <div className="cocktails">
          <h1>Contemporary Classics</h1>
          <div>{cocktail}</div>
        </div>
        <div>
          {this.state.selectedCocktail && this.state.selectedCocktail.length !== 0 ? (<div><CocktailSpecs cocktail={this.state.selectedCocktail}/></div>)
          : (null)}
        </div>
        <div>
          <div><CocktailForm handleSubmit={this.handleSubmit}/></div>
        </div>
      </div>
    )
  }
}

export default CocktailsContainer

// {
//   this.setState({
//       selectedCocktail: res
// })
  // .catch(err => console.log(err))
