import React from 'react';
// import IngredientsListEntry from './IngredientsListEntry.jsx'

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
          {/* {this.props.recipes.map(recipe => {
            return <IngredientsListEntry ingredient={recipe} key={recipe.id} onClick={this.handleRecipeClick}/>
          })} */}
          <div>INGREDIENTS</div>
      </div>
    )
  }
}

export default IngredientsList;