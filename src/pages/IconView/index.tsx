import React from "react";
import { Icon, View } from "@tarojs/components";
import "./index.scss";

export default () => {
  console.log('加载了');
  
  return (
    <View className='components-page'>
      <Icon size='60' type='success' />
      <Icon size='60' type='info' />
      <Icon size='60' type='warn' color='#ccc' />
      <Icon size='60' type='warn' />
      <Icon size='60' type='waiting' />
      <Icon size='20' type='success_no_circle' />
      <Icon size='20' type='warn' />
      <Icon size='20' type='success' />
      <Icon size='20' type='download' />
      <Icon size='20' type='clear' color='red' />
      <Icon size='20' type='search' />
    </View>
  );
};
