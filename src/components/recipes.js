import React, { Component } from "react";
import RecipeCard from "./recipeCard";
import { getRecipes } from "../services/recipeService";

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipeCards: [],
      startIndex: 0,
      noMoreRecipes: false,
      isLoading: false
    };
  }

  async componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    this.setState({
      recipeCards: [],
      startIndex: 0,
      noMoreRecipes: false,
      isLoading: true
    });
    const newRecipes = await getRecipes(0);
    this.setState({
      recipeCards: newRecipes,
      startIndex: newRecipes.length,
      noMoreRecipes: false,
      isLoading: false
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = async () => {
    const wrappedElement = document.getElementById("root");
    if (this.isBottom(wrappedElement)) {
      document.removeEventListener("scroll", this.trackScrolling);
      const prevState1 = { ...this.state };
      this.setState({
        recipeCards: prevState1.recipeCards,
        startIndex: prevState1.startIndex,
        noMoreRecipes: prevState1.noMoreRecipes,
        isLoading: true
      });
      const newRecipes = await getRecipes(this.state.startIndex);
      const prevState2 = { ...this.state };
      this.setState({
        recipeCards: prevState2.recipeCards.concat(newRecipes),
        startIndex: prevState2.startIndex + newRecipes.length,
        noMoreRecipes: newRecipes.length === 0,
        isLoading: false
      });
      if (newRecipes.length !== 0)
        document.addEventListener("scroll", this.trackScrolling);
    }
  };

  renderRecipeCards() {
    const { recipeCards } = this.state;
    return (
      <div>
        <ul className="list-unstyled">
          {recipeCards.map(recipe => {
            return (
              <li key={recipe._id}>
                <RecipeCard recipe={recipe} />
              </li>
            );
          })}
        </ul>
        {this.state.isLoading ? (
          <div className="spinner-border text-info mb-4" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
      </div>
    );
  }

  renderNoRecipeMessage() {
    return (
      <p className="text-info">
        <small>
          <i className="fa fa-times-circle"></i> There are no more recipes
        </small>
      </p>
    );
  }

  render() {
    return (
      <div>
        {this.renderRecipeCards()}
        {this.state.noMoreRecipes ? this.renderNoRecipeMessage() : null}
      </div>
    );
  }
}

export default Recipes;
