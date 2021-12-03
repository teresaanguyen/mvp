import React from 'react';
import RecipeList from './RecipeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your picked: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <h1>Devour Hour</h1>
      <div>Select Your Main Ingredient: </div>
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Pork">Pork</option>
          <option value="Tofu">Tofu</option>
          <option value="Ground Beef">Ground Beef</option>
          <option value="Ground Turkey">Ground Turkey</option>
          <option value="Ground Pork">Ground Pork</option>
          <option value="Chicken Wings">Chicken Wings</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <div>Recipes:</div>
      < RecipeList recipes={this.state.recipes}/>
    </div>
    )
  }
}

export default App;