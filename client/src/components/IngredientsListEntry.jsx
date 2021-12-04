import React from 'react';

class IngredientsListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('entry', this.props.ingredient.raw_text)
    return (
      <div>{this.props.ingredient.raw_text}</div>
    )
  }
}

export default IngredientsListEntry;