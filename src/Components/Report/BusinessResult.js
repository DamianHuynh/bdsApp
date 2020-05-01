import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {PersonalBusiness} from './PersonalBusiness';

const StyleTabBar = {
  tabBarOptions: {
    upperCaseLabel: false,
    tabStyle: {
      borderWidth: 0.5,
      borderRadius: 5,
    },
    indicatorStyle: {
      height: '100%',
      borderRadius: 5,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: '#000',
    },
    style: {backgroundColor: '#f8f8ff'},
  },
};
const BusinessTab = createMaterialTopTabNavigator(
  {
    First: {
      screen: PersonalBusiness,
      navigationOptions: {tabBarLabel: 'Nhân Sự'},
    },
    Second: {
      screen: Second,
      navigationOptions: {tabBarLabel: 'Nhóm'},
    },
    Third: {
      screen: Third,
      navigationOptions: {tabBarLabel: 'Phòng'},
    },
  },
  StyleTabBar,
);

function First() {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}
function Second() {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}
function Third() {
  return (
    <View>
      <Text> Hello </Text>
    </View>
  );
}

const BusinessResult = createAppContainer(BusinessTab);

export {BusinessResult};