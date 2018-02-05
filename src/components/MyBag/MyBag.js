import React, { Component } from "react";
import "./myBag.css";
import axios from "axios";

class MyBag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      have: [],
      want: [],
      userInput: "",
      newImage: "",
      newName: "",
      newCategory: "",
      newPrice: 0
    };

    this.removeFromWant = this.removeFromWant.bind(this);
    this.changeuserInput = this.changeuserInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  changeuserInput(val) {
    this.setState({ userInput: val });
  }

  componentDidMount() {
    axios
      .get("/api/have")
      .then(res => {
        this.setState({ have: res.data });
      })
      .catch(console.log);

    axios
      .get("/api/want")
      .then(res => {
        this.setState({ want: res.data });
      })
      .catch(console.log);
  }

  removeFromWant(item) {
    axios
      .delete(`/api/remove/${item.id}`)
      .then(res => {
        this.setState({ want: res.data });
      })
      .catch(console.log);
  }
  changePrice(item) {
    axios
      .put(`/api/put/${item.id}`, { price: this.state.userInput })
      .then(res => {
        this.setState({ have: res.data });
        this.setState({ userInput: "" });
      });
  }

  handleImage(val) {
    this.setState({ newImage: val });
  }
  handleName(val) {
    this.setState({ newName: val });
  }
  handleCategory(val) {
    this.setState({ newCategory: val });
  }
  handlePrice(val) {
    this.setState({ newPrice: val });
  }

  addNewItem(image, name, category, price) {
    axios
      .post("/api/newItem", {
        image_link: image,
        name: name,
        category: category,
        price: price
      })
      .then(res => console.log(res.data))
      .catch(console.log);
    axios
      .get("/api/have")
      .then(res => {
        this.setState({ have: res.data });
      })
      .catch(console.log);
    this.setState({ newImage: "", newName: "", newCategory: "", newPrice: "" });
  }

  render() {
    return (
      <div>
        <h1 id="mybag-title">My Bag Page</h1>
        <div id="lists">
          <div id="mybagHave">
            <h2 id="havewant">Have</h2>
            {this.state.have.map((item, i) => {
              return (
                <li key={i} className="search-items">
                  <img src={item.image_link} alt="Featured Makeup" /> <br />
                  Name:{item.name} <br /> Category:<span className="upper">
                    {item.category}
                  </span>
                  Price:{parseInt(item.price, 0)}{" "}
                  <input
                    type="text"
                    placeholder="Change purchase price"
                    onChange={e => this.changeuserInput(e.target.value)}
                  />
                  <button onClick={() => this.changePrice(item)}>
                    Change Price
                  </button>
                </li>
              );
            })}
            <li className="search-items">
              <h3>Add an item:</h3>
              <input
                type="text"
                placeholder="Insert Image URL"
                onChange={e => this.handleImage(e.target.value)}
              />
              <input
                type="text"
                placeholder="Insert Name"
                onChange={e => this.handleName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Insert Category"
                onChange={e => this.handleCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="Insert Price"
                onChange={e => this.handlePrice(e.target.value)}
              />
              <button
                onClick={() =>
                  this.addNewItem(
                    this.state.newImage,
                    this.state.newName,
                    this.state.newCategory,
                    this.state.newPrice
                  )
                }
              >
                Add Item
              </button>
            </li>
          </div>
          <div id="mybagWant">
            <h2 id="havewant">Want</h2>
            {this.state.want.map((item, i) => {
              return (
                <li key={i} className="search-items">
                  <img src={item.image_link} alt="Featured Makeup" />
                  <div className="li-text">
                    Name:{item.name} Category:<span className="upper">
                      {item.category}
                    </span>
                    Price:{parseInt(item.price, 0)}{" "}
                    <div>
                      <button onClick={() => this.removeFromWant(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MyBag;
