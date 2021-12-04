import React from 'react';

class IngredientsListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li>{this.props.ingredient.raw_text}</li>
    )
  }
}

export default IngredientsListEntry;