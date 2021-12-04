import React from 'react';

class RecipeListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const comp = this.props.recipe.sections;
    const instr = this.props.recipe.instructions;
    const name = this.props.recipe.name;
    return (
      <div>
        <img src={this.props.recipe.thumbnail_url} width="20%" height="20%" onClick={() => this.props.handleClick(comp, instr, name)}/>
        <br />
        {name}
      </div>
    )
  }
}

export default RecipeListEntry;