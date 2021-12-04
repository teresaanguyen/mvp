import React from 'react';
import IngredientsListComp from './IngredientsListComp.jsx'

class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('these are the recipe list', this.props.comp)
    return (
      <div>
        <button onClick={this.props.handleClick} >Back</button>
        <h3>Ingredients:</h3>
          {this.props.comp.map(comp => {
            return <IngredientsListComp comp={comp} key={comp.position} handleClick={this.handleClick}/>
          })}
      </div>
    )
  }
}

export default IngredientsList;