/*global chrome*/

import React, { Component } from "react";
import { getCurrentTab } from "../../common/Utils";

import { connect } from "react-redux";
import { updateWord } from "../../actions/Word-Actions";
import { resetState } from "../../common/LocalStorage";
import "./styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      wordToChange: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUpdateWord = this.onUpdateWord.bind(this);
  }

  sendData() {
    getCurrentTab(tab => {
      chrome.runtime.sendMessage({
        tabId: tab.id,
        msg: {
          word: this.props.word
        },
        type: "formsend"
      });
    });
  }

  handleSubmit() {
    this.sendData();
  }

  onUpdateWord() {
    this.sendData();
    this.props.onUpdateWord(this.state.word, this.state.wordToChange);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="Form">
        <h3>Change</h3>
        <input type="text" name="word" onChange={this.handleChange} />
        <h3>To</h3>
        <input type="text" name="wordToChange" onChange={this.handleChange} />
        <br />
        <h2 onClick={this.onUpdateWord}>ADD</h2>
        <h2 onClick={() => resetState()}>RESET</h2>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  word: state.word
});

const mapActionsToProps = { onUpdateWord: updateWord };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Form);
