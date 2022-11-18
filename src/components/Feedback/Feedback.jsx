// import css from 'components/Feedback/Feedback.module.css';
import { React, Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () =>
    this.setState(state => ({
      ...state,
      good: state.good + 1,
    }));

  addNeutral = () =>
    this.setState(state => ({
      ...state,
      neutral: state.neutral + 1,
    }));

  addBed = () =>
    this.setState(state => ({
      ...state,
      bad: state.bad + 1,
    }));

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <button type="button" onClick={this.addGood}>
          Good
        </button>
        <button type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.addBed}>
          Bed
        </button>
        <p>good: {good}</p>
        <p>neutral :{neutral}</p>
        <p>bad: {bad}</p>
      </>
    );
  }
}
