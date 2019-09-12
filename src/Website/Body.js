import React, { Fragment } from 'react';
import axios from 'axios';

import Label from './Label';

export default class Body extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "default",
      ablilityList: []
    };
  }

  async componentDidMount() {
    // https://pokeapi.co/api/v2/

    const result = await axios.get("https://pokeapi.co/api/v2/ability/");

    this.setState({ ablilityList: result.data.results });

    document.getElementById('name');

    console.log("result....", result);
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      console.log("changed value", this.state.value);
    });
  }

  render() {
    return <Fragment className="color">
      <input type="text" id="name" onChange={this.handleOnChange} /><br /><br />
      <Label text={`Welcome, ${this.state.value}`} /><br /><br />

      <select>
        <option>Select</option>
        {
          this.state.ablilityList.map(ability => {
            return <option>{ability.name}</option>
          })
        }
      </select>
    </Fragment>
  }
}