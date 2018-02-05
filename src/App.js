import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import HomePage from "./components/Home/HomePage";
import MyBag from "./components/MyBag/MyBag";
import Filter from "./components/Search/Filter/Filter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      home: true,
      filter: false,
      myBag: false
    };

    this.pageChanger = this.pageChanger.bind(this);
  }

  pageChanger(val) {
    if (val === "home") {
      this.setState({ home: true, filter: false, myBag: false });
    } else if (val === "search") {
      this.setState({ home: false, filter: true, myBag: false });
    } else if (val === "my bag") {
      this.setState({ home: false, filter: false, myBag: true });
    }
  }

  render() {
    const viewChange = e => {
      this.pageChanger(e.target.innerText.toLowerCase());
    };

    return (
      <div className="App">
        <Header changePage={viewChange} />
        {this.state.home && <HomePage />}
        {this.state.filter && <Filter />}
        {this.state.myBag && <MyBag />}
      </div>
    );
  }
}

export default App;
