import React from "react";
import { View, CoverView, CoverImage, Video } from "@tarojs/components";

import "./index.scss";

export default () => {
  const play = () => {
    console.log("点击了");
  };

  return (
    <View className='container'>
      <Video id='myVideo' src='src'>
        <CoverView className='controls'>
          <CoverView className='play' onClick={play}>
            <CoverImage className='img' src='src' />
          </CoverView>
        </CoverView>
      </Video>
    </View>
  );
};
