import React, { Component } from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onLikeToggle}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
