import React, { Component } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

    countClick = e => {
        const click = e.target.innerText.toLowerCase()
        this.setState(prevState => {
            return {
                [click]: prevState[click] + 1,
            }
        })
    }

    // countClickGood = () => {
    //     this.setState((prevState) => ({ good: (prevState.good += 1) }))
    // }

    // countClickNeutral = () => {
    //     this.setState((prevState) => ({ neutral: (prevState.neutral += 1) }))
    // }

    // countClickBad = () => {
    //     this.setState((prevState) => ({ bad: (prevState.bad += 1) }))
    // }

    countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)

    countPositiveFeedbackPercentage = () => (
       Math.round((this.state.good * 100) / this.countTotalFeedback())
    )


    render() {
        return (
            <div>
                <FeedbackOptions 
                  options={['good', 'neutral', 'bad']}
                  onLeaveFeedback={this.countClick}
                />
                <Statistics
                 good={this.state.good}
                 neutral={this.state.neutral}
                 bad={this.state.bad}
                 total={this.countTotalFeedback()}
                 positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </div>
        )
    }
}

