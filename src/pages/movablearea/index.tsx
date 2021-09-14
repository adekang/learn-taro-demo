import React from "react";
import { MovableArea, MovableView } from "@tarojs/components";
import "./index.scss";


export default () => {
  return (
    <MovableArea style='height: 200px; width: 200px; background: red;'>
      <MovableView
        style='height: 50px; width: 50px; background: blue;'
        direction='all'
      >
        旅行的意义
      </MovableView>
    </MovableArea>
  );
};
