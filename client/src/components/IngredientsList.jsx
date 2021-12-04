import React from 'react';
import IngredientsListComp from './IngredientsListComp.jsx';
import Instruction from './Instruction.jsx';

class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('name', this.props.title)
    return (
      <div>
        <button onClick={this.props.handleClick} >Back</button>
        <h3>{this.props.title}</h3>
          {this.props.comp.map(comp => {
            return <IngredientsListComp comp={comp} key={comp.position} handleClick={this.handleClick}/>
          })}
          <h4>Instructions:</h4>
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