import React from "react";

import styles from "../styles/checker.module.scss";
import MissingLetters from "./missing-letters";

class Checker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      text: this.props.text || '',
    };
  }

  componentDidMount() {
    this.validate();
  }

  validate() {
    const regex = /([a-z])(?!.*\1)/g;
    const matches = this.state.text.toLowerCase().match(regex);
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
    this.setState({
      text: event.target.value || ''
    }, () => this.validate());
  }

  render() {
    return (
      <div className={styles.checker}>
        <p
          className={`${styles.status} ${this.state.valid ? styles.valid : ""}`}
        >
          {this.state.valid ? "Valid" : "Invalid"}
        </p>
        <textarea
          className={`${styles.entry} ${this.state.valid ? styles.valid : ""}`}
          onChange={this.textChanged.bind(this)}
          defaultValue={this.props.text}
        >
        </textarea>
        <p>Characters: {this.state.text.length}</p>
        <MissingLetters text={this.state.text} />
      </div>
    );
  }
}

export default Checker
