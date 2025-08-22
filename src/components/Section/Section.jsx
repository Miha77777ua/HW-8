import React from "react";
import style from "./Section.module.scss"

export class Section extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <h2 className={style.section__title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

