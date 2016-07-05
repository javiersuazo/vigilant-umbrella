import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = () => (
  <View style={{margin: 128}}>
    <Text onPress={Actions.pageTwo}>This is Login!</Text>
  </View>
);

export default Login;
