import React from "react";
import { Progress, View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default () => {
  const toIndex = () => {
    Taro.navigateTo({ url: "/pages/index/index" });
  };
  return (
    <View className='components-page'>
      <Progress percent={20} showInfo strokeWidth={2} />
      <br />
      <Progress percent={40} strokeWidth={2} active />
      <br />

      <Progress percent={60} strokeWidth={2} active />
      <br />

      <Progress percent={80} strokeWidth={2} active activeColor='blue' />

      <Button onClick={toIndex}>首页</Button>
    </View>
  );
};
