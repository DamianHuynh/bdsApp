/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
// import {firebaseApp} from './config';
const {width: WIDTH} = Dimensions.get('window');
export class Pl extends Component {
  render() {
    const {navigation} = this.props;
    const hinhanhpl = navigation.getParam('hinhanhpl', 'chưa có dữ liệu');
    return (
      <View style={{flex: 1}}>
        <View style={styles.child2}>
          <Image
            source={{
              uri: hinhanhpl,
            }}
            style={styles.Proflie}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Proflie: {
    resizeMode: 'contain',
    flex: 1,
  },
  headerText: {
    width: WIDTH - 10,
    textAlign: 'center',
    flexWrap: 'wrap',
    lineHeight: 40,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#2D389C',
  },
  iconBack: {
    width: 30,
    height: 30,
  },
  child1: {flex: 1},
  child2: {flex: 15, margin: 10},
});
