import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistic/Statistic";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
    defaultTotal: 0,
  };
  static propTypes = {};

  totalFeedback = this.props.defaultTotal;
  positivePersentage;

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  leaveFeedback = (target) => {
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    this.totalFeedback = bad + neutral + good;
  };
  countPositiveFeedbackPercentage = () => {
    const { bad, neutral } = this.state;
    const positiveFeedback = this.totalFeedback - (bad + neutral);
    this.positivePersentage = (positiveFeedback / this.totalFeedback) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave Feedback"}>
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={options}
          />
        </Section>
        {this.totalFeedback ? (
          <Section title={"Statistic"}>
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.totalFeedback}
              positivePersentage={this.positivePersentage}
            />
          </Section>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </>
    );
  }
}

export default Feedback;
