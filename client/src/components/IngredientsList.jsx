import React from 'react';
import IngredientsListComp from './IngredientsListComp.jsx';
import Instruction from './Instruction.jsx';

class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick} >Back</button>
          {this.props.comp.map(comp => {
            return <IngredientsListComp comp={comp} key={comp.position} handleClick={this.handleClick}/>
          })}
          <h3>Instructions:</h3>
          <ol>
          {this.props.instr.map(instruction => {
            return <Instruction instr={instruction.display_text} key={instruction.position} />
          })}
          </ol>
      </div>
    )
  }
}

export default IngredientsList;