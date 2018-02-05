import React, { Component } from "react";
import "./Homepage.css";
import axios from "axios";
import HaveButton from "./HaveButton/HaveButton";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      makeup: []
    };

    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.addToHave = this.addToHave.bind(this);
    this.addToWant = this.addToWant.bind(this);
  }

  getRandomNumber() {
    let random = Math.floor(Math.random() * 160) + 1;
    return random;
  }

  componentDidMount() {
    axios
      .get("/api/get")
      .then(res => {
        this.setState({ makeup: res.data });
      })
      .catch(console.log);
  }

  addToHave(makeup) {
    axios
      .post("/api/have", makeup)
      .then(res => alert("Added to Have list in your bag!"))
      .catch(console.log);
  }

  addToWant(makeup) {
    axios
      .post("/api/want", makeup)
      .then(res => {
        alert("Added to Want list in your bag!");
      })
      .catch(console.log);
  }

  render() {
    let random = this.getRandomNumber();

    let sliced = this.state.makeup.slice(random, random + 4);
    return (
      <div>
        <div className="welcome">
          <h1>Welcome to My Makeup Bag!</h1>
          <h2>Featured Products</h2>
          <div className="featured">
            {this.state.makeup[5]
              ? sliced.map((item, i) => {
                  return (
                    <li key={i} className="homepage-list">
                      <img src={item.image_link} alt="Featured Makeup" />
                      <div className="li-text">
                        Name:{item.name} Brand:<span className="upper">
                          {item.brand}{" "}
                        </span>Category:{" "}
                        <span className="upper">{item.category}</span>
                        Price:${parseInt(item.price, 0)}{" "}
                        <div id="buttons">
                          <HaveButton item={item} addToHave={this.addToHave} />
                          <button onClick={() => this.addToWant(item)}>
                            Want
                          </button>{" "}
                        </div>
                      </div>
                    </li>
                  );
                })
              : false}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
