import React from 'react';
import IngredientsListEntry from './IngredientsListEntry.jsx'

class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('these are the recipe list', this.props.recipes)
    return (
      <div>
        <button onClick={this.props.handleClick} >Back</button>
        <h3>Ingredients:</h3>
          {this.props.ingredients.map(ingredient => {
            return <IngredientsListEntry ingredient={ingredient} key={ingredient.id} handleClick={this.handleClick}/>
          })}
          <div>INGREDIENTS</div>
      </div>
    )
  }
}

export default IngredientsList;