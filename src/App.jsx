import React from "react";
import { Section } from "./components/Section/Section.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = (ev) => {
    const obj = {};
    obj[ev.target.textContent.toLowerCase()] = this.state[ev.target.textContent.toLowerCase()] + 1

    this.setState(obj);
  }

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad))}%`;
  }

  render() {
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state).map(el => `${el[0].toUpperCase()}${el.slice(1)}`)}
            onLeaveFeedback={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.good + this.state.neutral + this.state.bad}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
