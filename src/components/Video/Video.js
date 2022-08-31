import React from "react";
import ReactPlayer from "react-player";

export const Video = (props) => {
  const { url, width, height } = props;
  let onStart = () => {
    console.log("on start: ", width, height);
    width = "100rem";
    height = "100rem";
  };
  let config = {
    youtube: {
      playerVars: { showinfo: 0 },
    },
  };
  let vwidth = width ? width : "15rem";
  let vheight = height ? height : "10rem";
  return (
    <ReactPlayer
      url={url}
      config={config}
      width={vwidth}
      height={vheight}
      
    />
  );
};
