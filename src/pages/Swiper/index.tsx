import React from "react";
import { Swiper, SwiperItem, View } from "@tarojs/components";
import "./index.scss";

export default () => {
  return (
    <Swiper
      className='test-h'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={false}
      circular
      indicatorDots
      autoplay
      easingFunction='linear'
    >
      <SwiperItem>
        <View className='demo-text-1'>1</View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-2'>2</View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-3'>3</View>
      </SwiperItem>
    </Swiper>
  );
};
