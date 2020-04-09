import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginScreen} from './src/pages/LoginScreen';
import {HomeScreen} from './src/pages/HomeScreen';
import {InforScreen} from './src/pages/Home/InforScreen';
import {Policy} from './src/pages/Infor/Policy';
import {Personel} from './src/pages/Personel';
import {Ogchart} from './src/pages/Infor/Ogchart';
import {ForgotPassword} from './src/pages/ForgotPassword';
<<<<<<< HEAD
import {ProjectScreen} from './src/pages/Project/ProjectScreen';
// import {ProjectDetails} from './src/pages/Project/ProjectDetails';

=======
import {Project} from './src/Project/Project';
import {location} from './src/Project/location';
import {Qdctp} from './src/pages/Infor/Qdctp';
import {Cdlt} from './src/pages/Infor/Cdlt';
import {Bnns} from './src/pages/Infor/Bnns';
import {Hdtb} from './src/pages/Infor/Hdtb';
import {Lnl} from './src/pages/Infor/Lnl';
import {Tq} from './src/Project/Tq';
import {Pl} from './src/Project/Pl';
import {Csbhnv} from './src/Project/Csbhnv';
import {Csbhkh} from './src/Project/Csbhkh';
import {Qc} from './src/Project/Qc';
import {Bg} from './src/Project/Bg';
import {baocao} from './src/baocao/baocao';
import {detail} from './src/pages/Infor/detail';
>>>>>>> dfaff0593da9c940b6e1a72892f7b3997ade4947
const AppNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
    InforScreen: InforScreen,
    Policy: Policy,
    Qdctp: Qdctp,
    Personel: Personel,
    Ogchart: Ogchart,
    ForgotPassword: ForgotPassword,
<<<<<<< HEAD
    ProjectScreen: ProjectScreen,
    // ProjectDetails: ProjectDetails,
=======
    Project: Project,
    location: location,
    Cdlt: Cdlt,
    Bnns: Bnns,
    Hdtb: Hdtb,
    Lnl: Lnl,
    Tq: Tq,
    Pl: Pl,
    Csbhkh: Csbhkh,
    Csbhnv: Csbhnv,
    Qc: Qc,
    Bg: Bg,
    baocao: baocao,
    detail: detail,
>>>>>>> dfaff0593da9c940b6e1a72892f7b3997ade4947
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

// const ProjectStack = createStackNavigator({});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
