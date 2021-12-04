import React from 'react';

class IngredientsListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>{this.props.ingredient.raw_text}</div>
    )
  }
}

export default IngredientsListEntry;