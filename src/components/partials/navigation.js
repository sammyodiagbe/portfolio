import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      opennav: false,
    };
  }
  render() {
    return (
      <nav className="navigation-bar">
        <div
          className="burger-nav"
          onClick={() => {
            this.setState({
              opennav: true,
            });
          }}
        >
          <div />
          <div />
          <div />
        </div>
        <a className="brand-name">
          Story<span>Hub</span>
        </a>
        <div className="navigation-menu">
          <ul className="nav-navigation">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="fa fa-search search-icon"></i>
        </div>

        {/* side navigation */}
        <div
          className={`side-navigation ${this.state.opennav ? "open-nav" : ""}`}
        >
          <div className="nav">
            <div className="nav-head">
              <h1>
                Story
                <span style={{ color: "rgb(236, 96, 119)" }}>Hub</span>
              </h1>
              <button
                className="close-btn"
                onClick={() => {
                  this.setState({
                    opennav: false,
                  });
                }}
              >
                &times;
              </button>
            </div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#stories">Stories</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
