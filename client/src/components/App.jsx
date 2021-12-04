import React from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import IngredientsList from './IngredientsList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Beef',
      recipes: [],
      comp: [],
      click: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecipeClick = this.handleRecipeClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/recipes/list/${this.state.value}`)
      .then((response) => {
        this.setState({recipes: response.data})
      })
      .catch((err) => {
        console.error('submit error', err)
      })
  }

  handleRecipeClick(comp) {
    // event.preventDefault();
    this.setState({
      click: true,
      comp: comp
    })
    // get ingredients list from recipe clicked
  }

  handleBackClick(event) {
    event.preventDefault();
    this.setState({click: false})
  }

  render() {
    let component;
    if (!this.state.click) {
      component = <RecipeList recipes={this.state.recipes} handleClick={this.handleRecipeClick}/>;
    } else {
      component = <IngredientsList comp={this.state.comp} handleClick={this.handleBackClick}/>;
    }
    return (
    <div>
      <h1>Devour Hour</h1>
      <div>Select Your Ingredient: </div>
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Pork">Pork</option>
          <option value="Tofu">Tofu</option>
          <option value="Ground Beef">Ground Beef</option>
          <option value="Eggs">Eggs</option>
          <option value="Cheese">Cheese</option>
          <option value="Steak">Steak</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <br />
      {component}
    </div>
    )
  }
}

export default App;