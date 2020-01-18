import React, { Component } from "react";

class RecipeCardDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  renderMenu() {
    return this.state.showMenu ? (
      <div
        className="card"
        ref={element => {
          this.dropdownMenu = element;
        }}
        style={{ position: "absolute" }}
      >
        <ul className="list-group list-group-flush borderless">
          <li className="list-group-item border-0 py-1 pl-1">
            <span className="col-sm-1">
              <i className="fa fa-edit"> Edit</i>
            </span>
          </li>
          <li className="list-group-item border-0 py-1 pl-1">
            <span className="col-sm-1">
              <i className="fa fa-share-alt"> Share</i>
            </span>
          </li>
          <li className="list-group-item border-0 py-1 pl-1">
            <span className="col-sm-1">
              <i className="fa fa-edit"> Edit</i>
            </span>
          </li>
          <li className="list-group-item border-0 py-1 pl-1">
            <span className="col-sm-1">
              <i className="fa fa-edit"> Edit</i>
            </span>
          </li>
        </ul>
      </div>
    ) : null;
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="m-2">
        <div className="row">
          <button
            type="button"
            className="close m-2"
            onClick={this.handleClick}
          >
            <span aria-hidden="true">
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="row">{this.renderMenu()}</div>
      </div>
    );
  }
}

export default RecipeCardDropdown;
