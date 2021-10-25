import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import SectionTitle from "./components/SectionTitle";
import Statistics from "./components/Statistics";

export function FeedbackApp () {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeautral] = useState(0);
  const feedbackHandler = e => {
    switch (e.target.value) {
      case 'bad':
        setBad(bad + 1)
        break;
    case 'good' : setGood(good + 1)
        break;
      case 'neutral': setNeautral(neutral + 1)
        break;
      default: return;
    }
  }
  const countTotalFeedback = e => {
    const total = bad + good + neutral;
    return total
  }
  
  const countPositiveFeedbackPercentage = e => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };
  const NoFeedback = () => {
    if (good === 0 &&
      neutral === 0 &&
      bad === 0) {
      return true
    }
    else {
      return false
    }
  }
    const btnNames = ['bad','good','neutral'];
    return <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
        options={btnNames}
        onLeaveFeedback = {feedbackHandler}/>
      </SectionTitle>
      <SectionTitle title="Statistics">
        {NoFeedback() ? (<Notification message="No feedback given" />) : (<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}
        />)}
      </SectionTitle>
    </>
}

