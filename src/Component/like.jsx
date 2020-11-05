import React, { Component } from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  if (props.liked) classes += "-o";
  return (
    <i
      onClick={props.click}
      className={classes}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
