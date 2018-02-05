import React, { Component } from "react";
import Search from "./Search/Search";
import "./filter.css";

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      selectedBrand: "covergirl"
    };

    this.filterBrand = this.filterBrand.bind(this);
  }

  filterBrand(val) {
    this.setState({ selectedBrand: val.target.value });
  }
  render() {
    return (
      <div className="filter">
        <h1 id="filter-title">Filter Products</h1>
        <div id="brands-filter">
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="almay"
                checked={this.state.selectedBrand === "almay"}
                onChange={this.filterBrand}
              />
              Almay
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="annabelle"
                checked={this.state.selectedBrand === "annabelle"}
                onChange={this.filterBrand}
              />
              Annabelle
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="benefit"
                checked={this.state.selectedBrand === "benefit"}
                onChange={this.filterBrand}
              />
              Benefit
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="clinique"
                checked={this.state.selectedBrand === "clinique"}
                onChange={this.filterBrand}
              />
              Clinique
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="covergirl"
                checked={this.state.selectedBrand === "covergirl"}
                onChange={this.filterBrand}
              />
              Covergirl
            </label>
          </div>{" "}
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="dior"
                checked={this.state.selectedBrand === "dior"}
                onChange={this.filterBrand}
              />
              Dior
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="fenty"
                checked={this.state.selectedBrand === "fenty"}
                onChange={this.filterBrand}
              />
              Fenty
            </label>
          </div>{" "}
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="glossier"
                checked={this.state.selectedBrand === "glossier"}
                onChange={this.filterBrand}
              />
              Glossier
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="iman"
                checked={this.state.selectedBrand === "iman"}
                onChange={this.filterBrand}
              />
              Iman
            </label>
          </div>
          <label>
            <input
              type="radio"
              value="marcelle"
              checked={this.state.selectedBrand === "marcelle"}
              onChange={this.filterBrand}
            />
            Marcelle
          </label>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="maybelline"
                checked={this.state.selectedBrand === "maybelline"}
                onChange={this.filterBrand}
              />
              Maybelline
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="milani"
                checked={this.state.selectedBrand === "milani"}
                onChange={this.filterBrand}
              />
              Milani
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="nyx"
                checked={this.state.selectedBrand === "nyx"}
                onChange={this.filterBrand}
              />
              Nyx
            </label>
          </div>{" "}
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="revlon"
                checked={this.state.selectedBrand === "revlon"}
                onChange={this.filterBrand}
              />
              Revlon
            </label>
          </div>
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="sante"
                checked={this.state.selectedBrand === "sante"}
                onChange={this.filterBrand}
              />
              Sante
            </label>
          </div>{" "}
          <div className="radioButton">
            <label>
              <input
                type="radio"
                value="smashbox"
                checked={this.state.selectedBrand === "smashbox"}
                onChange={this.filterBrand}
              />
              Smashbox
            </label>
          </div>
        </div>
        <Search brand={this.state.selectedBrand} />
      </div>
    );
  }
}

export default Filter;
