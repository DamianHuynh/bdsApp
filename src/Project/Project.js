import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export class Project extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'XEM THÔNG TIN',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate({routeName: 'HomeScreen'})}>
          <Image source={require('../img/exit.png')} style={styles.iconBack} />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#0A053F',
      headerTitleAlign: 'center',
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.MenuContainer}>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Tq');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>Tổng quan</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Pl');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>Pháp lý</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Bg');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>Bảng giá</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Csbhnv');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>CSBH dành cho nhân viên</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Csbhkh');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>CSBH dành cho khách hàng</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Qc');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>Quảng cáo</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Col}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('location');
            }}>
            <View style={styles.TabMenu}>
              <View style={styles.Iconstyle}>
                <Image
                  source={require('../img/Inforicon/policy.png')}
                  style={styles.Icon}
                />
              </View>
              <Text style={styles.Text}>Vị trí</Text>
              <Text />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MenuContainer: {
    flex: 1,
    //justifyContent: 'center',
    //flexDirection: 'column',
    //alignItems: 'center',
    //backgroundColor: 'grey',
  },
  Col: {
    //flex: 1,
    //flexDirection: 'row',
    height: 70,
    margin: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#1787AB',
    justifyContent: 'center',
  },
  TabMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconBack: {
    width: 30,
    height: 30,
  },
  Iconstyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
  },
  Icon: {
    height: 50,
    width: 50,
  },
  Text: {
    color: 'white',
    fontStyle: 'normal',
    // fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 23,
    alignSelf: 'center',
  },
  btnGo: {
    //color: 'white',
    fontSize: 18,
  },
});