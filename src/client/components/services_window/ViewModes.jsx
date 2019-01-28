import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleViewMode } from "../redux/actions/windowActions.js";
import { Link } from "react-router-dom";

const ViewModeBoxActive = styled.div`
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  min-width: 25vh;
  cursor: pointer;
  background-color: #326de6;
  color: white;
`;

const ViewModeBoxInActive = styled.div`
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  min-width: 25vh;
  cursor: pointer;
  background-color: white;
  color: black;
`;

class ViewModes extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.toggleViewMode();
  }

  render() {
    return (
      <div>
        <Link to="/">
          {this.props.viewMode === "Cluster" ? (
            <ViewModeBoxActive>Cluster</ViewModeBoxActive>
          ) : (
            <ViewModeBoxInActive onClick={this.handleOnClick.bind(this)}>
              Cluster
            </ViewModeBoxInActive>
          )}
        </Link>
        <Link to="/traffic">
          {this.props.viewMode === "Traffic" ? (
            <ViewModeBoxActive>Traffic</ViewModeBoxActive>
          ) : (
            <ViewModeBoxInActive onClick={this.handleOnClick.bind(this)}>
              Traffic
            </ViewModeBoxInActive>
          )}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewMode: state.windowReducer.viewMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleViewMode: serviceType => dispatch(toggleViewMode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewModes);