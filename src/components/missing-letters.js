import React from "react";

import styles from '../styles/missing-letters.module.scss';

class MissingLetters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missing: [],
    }
  }

  componentDidMount() {
    this.getMissingLetters();
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      this.getMissingLetters();
    }
  }

  getMissingLetters() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const missing = [];
    for (const letter of letters) {
      if (this.props.text.toLowerCase().indexOf(letter) < 0) {
        missing.push(letter);
      }
    }
    this.setState({ missing });
  }

  render() {
    const letters = [];
    for (const letter of this.state.missing) {
      letters.push(<li key={letter}>{letter}</li>);
    }

    return (
      <div className={`${styles.missingLetters} ${this.state.missing.length === 0 ? styles.valid : ''}`}>
        <h2>Missing letters:</h2>
        <ul>
          {letters}
        </ul>
      </div>
    );
  }
}

export default MissingLetters;
