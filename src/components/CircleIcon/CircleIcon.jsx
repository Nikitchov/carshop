import React from "react";
import style from "./CircleIcon.module.scss";
function CircleIcon(props) {
  return (
    <div className={style.wrapper}>
      <img src={props.icon} className={style.img} alt="icon" />
    </div>
  );
}

export default CircleIcon;
