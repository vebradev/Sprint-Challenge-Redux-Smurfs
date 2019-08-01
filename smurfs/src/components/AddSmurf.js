import React from "react";
import styled from "styled-components";

class AddSmurf extends React.Component {
  state = {
    errorMsg: null
  };

  nameRef = React.createRef();
  ageRef = React.createRef();
  heightRef = React.createRef();

  addSmurf = e => {
    e.preventDefault();
    const newData = {
      name: this.nameRef.current.value,
      age: this.ageRef.current.value,
      height: this.heightRef.current.value
    };

    if (newData.name && newData.age && newData.height) {
      this.nameRef.current.value = null;
      this.ageRef.current.value = null;
      this.heightRef.current.value = null;
      this.setState({ errorMsg: null });
    } else {
      this.setState({
        errorMsg: "Fill all fields."
      });
    }

    this.props.addSmurf(newData);
  };

  render() {
    return (
      <div>
        <StyledForm>
          <input type="text" placeholder="Name" ref={this.nameRef} />
          <input type="number" placeholder="Age" ref={this.ageRef} />
          <input type="number" placeholder="Height" ref={this.heightRef} />
          <button onClick={e => this.addSmurf(e)}>Add Smurf</button>
        </StyledForm>
        {this.state.errorMsg ? <StyledP>{this.state.errorMsg}</StyledP> : null}
      </div>
    );
  }
}

export default AddSmurf;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 60px 0 0 0;
  padding: 30px 0 0 0;
  border-top: 1px solid #34314f;

  input {
    border: 0;
    padding: 10px 20px;
    margin: 0 5px 0 0;
    font-size: 15px;
    border: 1px solid #ff9d007d;
    border-radius: 4px;
    background-color: #ffc15e1f;
    color: #fff;
    transition: all 0.3s;

    &:outline {
      border: 0;
    }

    &:focus {
      background-color: #ffc15ec7;
      color: #34314f;
    }
  }

  input[type="text"] {
    width: 25.6%;
  }

  input[type="number"] {
    width: 17%;
  }

  button {
    font-size: 15px;
    font-family: monospace;
    text-transform: uppercase;
    font-weight: bold;
    color: #692db7;
    display: block;
    width: 100%;
    margin: 5px 0;
    padding: 20px 20px;
    border-radius: 4px;
    border: 1px solid #ff9e03;
    background-color: #ffc15e;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #ff9e03;
    }
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 16px;
  background-color: red;
  padding: 10px;
  transition: all 0.3s;
`;
