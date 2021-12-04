import React from 'react';
import RecipeListEntry from './RecipeListEntry.jsx'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('these are the recipe list', this.props.recipes)
    return (
      <div>
        <ul>
          {this.props.recipes.map(recipe => {
            return <RecipeListEntry recipe={recipe} key={recipe.id}/>
          })}
        </ul>
      </div>
    )
  }
}

export default RecipeList;