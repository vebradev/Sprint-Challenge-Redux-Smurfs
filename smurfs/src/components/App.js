import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions/index";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Smurf from "../components/Smurf";
import AddSmurf from "../components/AddSmurf";
import "./App.css";

const StyledH2 = styled.h2`
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;

class App extends Component {
  componentDidMount = () => {
    this.props.fetchSmurfs();
  };

  render() {
    const { smurfs, fetchingSmurfs } = this.props;
    if (fetchingSmurfs) {
      return <div>Stay put, smurfs are on the way ...</div>;
    }
    return (
      <div>
        <StyledH2>SMURFS! 2.0 W/ Redux</StyledH2>
        <StyledUl>
          {smurfs.map(smurf => (
            <Smurf smurf={smurf} key={smurf.id} />
          ))}
        </StyledUl>
        <AddSmurf addSmurf={this.props.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSmurfs,
      addSmurf
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);
