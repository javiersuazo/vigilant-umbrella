
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Login from './app/components/Login';
import TodoContainer from './app/containers/todoContainer';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers/reducer';

let store = createStore(reducers, {
  todos: [{
    text: 'Local storage todo'
  }]
});

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true}/>
      <Scene key="pageTwo" component={TodoContainer} title="Add Todo"/>
    </Scene> 
);

class VigilantUmbrella extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Router scenes={scenes} />
    	</Provider>
    ) 
  }
}

AppRegistry.registerComponent('VigilantUmbrella', () => VigilantUmbrella);
