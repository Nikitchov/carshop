import React from "react";
import "./CardNews.css";

function CardNews(props) {
  return (
    <div className="card">
      <img src={props.img} className="picture" alt="icon" />
      <div className="linear">
        <div className="textnews">
          <p className="title">{props.title} </p>
          <p className="text">{props.text}</p>
          <div className="lowerinfo">
            <p className="text-style">{props.author}</p>
            <p className="text-style">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
