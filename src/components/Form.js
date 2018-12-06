import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class CocktailForm extends Component {

  state =
    // name: "",
    // description: "",
    // instructions: "",
    // source: "",
    // ingredient: "",
    // amount: ""
    {"cocktail": {
    	              "name": "",
                   	"description": "",
                   	"instructions": "",
                   	"source": "",
                   	"proportions": [
                                 		{
                                 		"ingredient_name": "",
                                 		"amount": ""
                                 		}
   	                ]}}


  changeHandler = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
     e.preventDefault()
     this.props.handleSubmit(this.state)
     this.setState(    {"cocktail": {
         	              "name": "",
                        	"description": "",
                        	"instructions": "",
                        	"source": "",
                        	"proportions": [
                                      		{
                                      		"ingredient_name": "",
                                      		"amount": ""
                                      		}
        	                ]}}
                        )
 }

render(){
  return(
    <div className="input-fields">
      <form onSubmit={this.submitHandler} className="cocktailForm">
        <input onChange={this.changeHandler} type="text" className="input" name="name" placeholder="Name..."/><br/>
        <input onChange={this.changeHandler} type="text" className="input" name="description" placeholder="Description..." /><br/>
        <input onChange={this.changeHandler} type="text" className="input" name="instructions" placeholder="Instructions..."/><br/>
        <input onChange={this.changeHandler} type="text" className="input" name="source" placeholder="Source..."/><br/>
        <input onChange={this.changeHandler} type="text" className="input" name="ingredient" placeholder="Ingredient Name..."/><br/>
        <input onChange={this.changeHandler} type="text" className="input" name="amount" placeholder="Amount..."/><br/>
        <button type="submit">Create Cocktail</button>
      </form>
    </div>
    )
  }
}


export default CocktailForm;
