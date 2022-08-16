import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Text, Checkbox } from 'react-native-paper';

const App = () => {
  const {
    container,
    accountHelpTitle,
    childContainer,
    row,
    col,
    flexMarginTitle,
    flexMarginForm,
    titleLabel
  } = styles;

  const textInputStyle = {
    mode: 'outlined',
    activeOutlineColor: '#874BE3'
  }

  // Local State
  const [text, setText] = useState("");

  return (
    <View style={container}>
      <Image source={{ uri: 'https://media.discordapp.net/attachments/932530239433744394/1008895315098742794/Bg.png?width=231&height=499' }} style={styles.backgroundImage}></Image>
      <View style={childContainer}>
        <View style={col}>
          <Text style={titleLabel} variant="headlineSmall">
            Welcome Back!
          </Text>
          <Text variant="headlineLarge">
            Sign In to your Account
          </Text>
        </View>
        <View style={[col, flexMarginTitle]}>
          <View style={[col, flexMarginForm]}>
            <View>
              <Text variant="labelLarge">Email Account</Text>
            </View>
            <View>
              <TextInput
                placeholder="Email"
                value={text}
                onChangeText={text => setText(text)}
                {...textInputStyle}
              />
            </View>
          </View>
          <View style={[col, flexMarginForm]}>
            <View>
              <Text variant="labelLarge">Password Account</Text>
            </View>
            <View>
              <TextInput
                placeholder="Password"
                value={text}
                onChangeText={text => setText(text)}
                {...textInputStyle}
              />
            </View>
          </View>
          <View style={[row, flexMarginForm, { justifyContent: "space-between", alignItems: "center" }]}>
            <View style={[row, { alignItems: "center" }]}>
              <View>
                <Checkbox
                  status={'checked'}
                  {...accountHelpTitle}
                />
              </View>
              <View></View>
              <Text style={accountHelpTitle}>
                Remember Me
              </Text>
            </View>
            <View>
              <Text style={accountHelpTitle}>
                Forgot Password?
              </Text>
            </View>
          </View>
        </View>
      </View >
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
