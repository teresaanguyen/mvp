import React from 'react';

class RecipeListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ingred = this.props.recipe.sections[0].components;
    console.log('ingredients', ingred)
    return (
      <div>
        <img src={this.props.recipe.thumbnail_url} width="20%" height="20%" onClick={() => this.props.handleClick(ingred)}/>
        <br />
        {this.props.recipe.name}
      </div>
    )
  }
}

export default RecipeListEntry;