import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { HomeRoutes } from './Routes/HomeRoutes';

const App = () => {
  // Navigation Variable 
  const { Screen, Navigator } = createNativeStackNavigator();

  const {
    container,
    childContainer
  } = styles;

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  const homeScreenPath = (item, index) => {
    const { name, component, option } = item;

    return <Screen
      key={index}
      name={name}
      component={component}
      options={{ ...option }}
    />;
  }

  return (
    <View style={container}>
      <Image source={{ uri: 'https://media.discordapp.net/attachments/932530239433744394/1008895315098742794/Bg.png?width=231&height=499' }} style={styles.backgroundImage}></Image>
      <View style={childContainer}>
        <NavigationContainer theme={navigationTheme} >
          <Navigator initialRouteName="Login">
            {HomeRoutes.length > 0 && HomeRoutes.map(homeScreenPath)}
          </Navigator>
        </NavigationContainer>
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  childContainer: {
    flex: 3,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  flexMarginTitle: {
    marginTop: 30,
  },
  flexMarginForm: {
    marginTop: 15,
  },
  titleLabel: {
    color: '#56565A',
    fontWeight: '500'
  },
  accountHelpTitle: {
    color: '#A5A5A5',
    uncheckedColor: '#A5A5A5'
  }
});

export default App;
