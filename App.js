import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import  { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {
    Screen: TransactionScreen,
  },
  Search: {
    Search: SearchScreen
  },
},
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === 'Transaction'){
          return(
            <Image 
            source = {require('../images/book.png')}
            style = {{width: 40, height: 40}}/>
          );
        }
        else if(routeName === 'Search'){
          return(
            <Image
            source = {require('../images/searchingbook.png')}
            style = {{width: 40, height: 40}}/>
          );
        }
      }})
  }
); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(TabNavigator);