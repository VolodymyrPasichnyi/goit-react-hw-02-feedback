import React, { Component } from "react";
import css from './Feedback.module.css'


export class Crock extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

    handleClickGood = () => {
        this.setState((prevState) => ({ good: (prevState.good += 1) }))
    }

    handleClickNeutral = () => {
        this.setState((prevState) => ({ neutral: (prevState.neutral += 1) }))
    }

    handleClickBad = () => {
        this.setState((prevState) => ({ bad: (prevState.bad += 1) }))
    }

    countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)

    countPositiveFeedbackPercentage = () => (
       Math.round((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad))
    )


    render() {
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button 
                        className={css.button}
                        onClick={this.handleClickGood}
                        >Good</button>
                    <button 
                        className={css.button}
                        onClick={this.handleClickNeutral}
                        >Neutral</button>
                    <button 
                        className={css.button}
                        onClick={this.handleClickBad}
                        >Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good: {this.state.good}</p>
                    <p>Neutral: {this.state.neutral}</p>
                    <p>Bad: {this.state.bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </div>
        )
    }
}

