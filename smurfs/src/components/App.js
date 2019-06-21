import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Smurf from "../components/Smurf";
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
    console.log(this.props);
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSmurfs
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);
