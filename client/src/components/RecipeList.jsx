import React from 'react';

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <ol>
          <li>Chicken Soup</li>
          <li>Chicken Noodle Soup</li>
          <li>Creamy Chicken Soup</li>
          <li>Chicken1</li>
          <li>Chicken2</li>
        </ol>
      </div>
    )
  }
}

export default RecipeList;