import React from 'react';
import IngredientsListEntry from './IngredientsListEntry.jsx';

class IngredientsListComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const title = this.props.comp.name || 'Ingredients';
    return (
      <div>
        <h3>{title}</h3>
        <ul>
            {this.props.comp.components.map(ingredient => {
              return <IngredientsListEntry ingredient={ingredient} key={ingredient.position} handleClick={this.handleClick}/>
            })}
        </ul>
      </div>
    )
  }
}

export default IngredientsListComp;