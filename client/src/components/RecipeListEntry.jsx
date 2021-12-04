import React from 'react';

class RecipeListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li>{this.props.recipe.name}</li>
    )
  }
}

export default RecipeListEntry;