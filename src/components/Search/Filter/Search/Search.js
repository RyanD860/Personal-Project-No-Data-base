import React, { Component } from "react";
import "./../../Search.css";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makeup: [],
      filtered: []
    };

    this.addToHave = this.addToHave.bind(this);
    this.addToWant = this.addToWant.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/get")
      .then(res => {
        this.setState({ makeup: res.data });
      })
      .catch(console.log);
  }

  addToHave(item) {
    axios
      .post("/api/have", item)
      .then(res => alert(res.data))
      .catch(console.log);
  }

  addToWant(item) {
    axios
      .post("/api/want", item)
      .then(res => {
        alert(res.data);
      })
      .catch(console.log);
  }

  render() {
    let filtme = this.state.makeup.filter(
      item => item.brand === this.props.brand
    );

    let map = filtme.map((item, i) => {
      return (
        <li key={i} className="search-items">
          <img src={item.image_link} alt="Featured Makeup" />
          <div className="li-text">
            Name:{item.name} Category:<span className="upper">
              {item.category}
            </span>
            Price:{parseInt(item.price, 0)}{" "}
            <div>
              <button onClick={() => this.addToHave(item)}>Have</button>{" "}
              <button onClick={() => this.addToWant(item)}>Want</button>{" "}
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <h1 id="search">Search Page</h1>
        <div id="search-flex">{this.state.makeup[5] ? map : false}</div>
      </div>
    );
  }
}

export default Search;
