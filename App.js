//  made by AbhinavDatta
//  follow/checkme in https://github.com/abhinavdatta

//used Extension                                                                                  https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp? utm_source=chrome-ntp-icon                                                                                make sure you use this extension this is great


//if you are using my code as your source please refer my name in your program source (or) github readme.md                                                                                                                                                                                             thankyou for using my code and welcome

import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoScreen from './screens/GoScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  GoScreen: GoScreen,
})

const AppContainer = createAppContainer(AppNavigator);