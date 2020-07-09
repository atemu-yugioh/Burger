import React, { Component } from "react";
import { connect } from "react-redux";
import "./Burger.css";
import * as actions from "../Action/index";

class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([name, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={name}></div>);
      }
      return breadMid;
    });
  };

  renderMenu = () => {
    let { burger, menu } = this.props;
    return Object.entries(menu).map(([name, price], index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => this.props.handleBurger(name, -1)}
            >
              -
            </button>
            {burger[name]}
            <button
              className="btn btn-success"
              onClick={() => this.props.handleBurger(name, 1)}
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[name] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success text-center">Oder Burger</h3>
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-center text-danger">Your Burger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-md-5">
            <h3 className="text-center text-success">Choose Ingredients</h3>
            <table className="table ">
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th></th>
                  <th>unit price</th>
                  <th>Pay</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Total</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

const mapDispatchToProps = (Dispatch, props) => {
  return {
    handleBurger: (name, number) => {
      Dispatch(actions.handleBurger(name, number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
