import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      fullName: "Omolori Chidera",
      bio: "An experienced frontend developer known for creating exceptional user experiences, staying current with industry trends, and actively contributing to the developer community.",
      imgSrc: "/ZURI.jpeg",
      profession: "Tech Sis",
    };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState((state) => ({ ...state, visible: !state.visible }));
  }

  render() {
    return (
      <div>
        {this.state.visible && (
          <>
            <h2>{this.state.fullName}</h2>
            <h2>{this.state.bio}</h2>
            <h2>
              <img src={this.state.imgSrc} alt="" />
            </h2>
            <h2>{this.state.profession}</h2>
          </>
        )}
        <button type="button" onClick={this.toggleVisible}>
          toggle
        </button>
      </div>
    );
  }
}

export default App;
