// import React, { Component } from "react";
import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistic/Statistic";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let totalFeedback;

  const leaveFeedback = (target) => {
    switch (target) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return (totalFeedback = bad + neutral + good);
  };
  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = totalFeedback - (bad + neutral);
    return (positiveFeedback / totalFeedback) * 100;
  };

  const options = ["good", "neutral", "bad"];
  return (
    <>
      <Section title={"Please leave Feedback"}>
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={options} />
      </Section>
      {countTotalFeedback() ? (
        <Section title={"Statistic"}>
          <Statistic
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePersentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={"There is no feedback"} />
      )}
    </>
  );
};

export default Feedback;
