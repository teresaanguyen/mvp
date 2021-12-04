import React from 'react';

class RecipeListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const comp = this.props.recipe.sections;
    console.log('recipe comp', comp)
    return (
      <div>
        <img src={this.props.recipe.thumbnail_url} width="20%" height="20%" onClick={() => this.props.handleClick(comp)}/>
        <br />
        {this.props.recipe.name}
      </div>
    )
  }
}

export default RecipeListEntry;