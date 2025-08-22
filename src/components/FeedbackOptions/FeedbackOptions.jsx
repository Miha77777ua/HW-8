import React from "react";
import style from "./FeedbackOptions.module.scss"

export class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul className={style.options}>
        {this.props.options.map((el, id) => (
          <li className={style.options__item} key={id}>
            <button className={style.options__btn} onClick={this.props.onLeaveFeedback}>{el}</button>
          </li>
        ))}
      </ul>
    );
  }
}
