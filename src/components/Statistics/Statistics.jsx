import React from "react";
import { Notification } from "../Notification/Notification";

export class Statistics extends React.Component {
  render() {
    return (
      <>
        {
          this.props.total === 0
            ? <Notification message="There is no feedback" />
            : <ul className="statistics">
              <li className="statistics__item">Good: {this.props.good}</li>
              <li className="statistics__item">Neutral: {this.props.neutral}</li>
              <li className="statistics__item">Bad: {this.props.bad}</li>
              <li className="statistics__item">Total: {this.props.total}</li>
              <li className="statistics__item">Positive feedback: {this.props.positivePercentage}</li>
            </ul>
        }
      </>
    );
  }
}
