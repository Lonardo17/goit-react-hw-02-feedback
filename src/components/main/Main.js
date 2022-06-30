import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import Feedback from './feedback/Feedback';

class Main extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback:0,
    }
 state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    }
    addGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }

    addBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }

    addNeutral = () => {
     this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    }
    totalResult() {
         return this.state.good + this.state.neutral + this.state.bad;
    }
    feedbackResult() {
        const total = this.totalResult();
        return Math.round(this.state.good/total*100)
    }
    
    render() {
        const total = this.totalResult();
        const feedback = this.feedbackResult();
        return (<section>
            <Feedback addGood={this.addGood} addNeutral={this.addNeutral} addBad={this.addBad} />
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={feedback} />
            </section>
    )
    }

}
export default Main;