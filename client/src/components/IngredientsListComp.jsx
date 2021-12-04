import React from 'react';
import IngredientsListEntry from './IngredientsListEntry.jsx';

class IngredientsListComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('comp', this.props.comp.components)
    const title = this.props.comp.name || 'Main';
    return (
      <div>
        <h4>{title}</h4>
            {this.props.comp.components.map(ingredient => {
              return <IngredientsListEntry ingredient={ingredient} key={ingredient.position} handleClick={this.handleClick}/>
            })}
      </div>
    )
  }
}

export default IngredientsListComp;