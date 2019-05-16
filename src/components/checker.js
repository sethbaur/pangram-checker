import React from "react"

import styles from "../styles/checker.module.scss"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      characterCount: 0,
      valid: false,
    };
  }

  checkLength(text) {
    this.setState({
      characterCount: text.length
    });
  }

  validate(text) {
    const regex = /([a-z])(?!.*\1)/g;
    const matches = text.toLowerCase().match(regex);
    if (matches) {
      const isValid = matches.length === 26 ?
        true :
        false;
      this.setState({
        valid: isValid
      });
    };
  }

  textChanged(event) {
    const input = event.target.value || '';
    this.checkLength(input);
    this.validate(input);
  }

  render() {
    return (
      <>
      <p
        className={`${styles.status} ${this.state.valid ? styles.valid : ""}`}
      >
        {this.state.valid ? "Valid" : "Invalid"}
      </p>
        <textarea
          className={`${styles.entry} ${this.state.valid ? styles.valid : ""}`}
          onChange={this.textChanged.bind(this)}
        >
        </textarea>
        <p>Characters: {this.state.characterCount}</p>
      </>
    );
  }
}

export default Header
