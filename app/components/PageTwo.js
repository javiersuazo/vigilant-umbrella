import React, { Component } from 'react';

import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PageTwo = ({ todos, onClick }) => {
  let input;
  const renderTodos = (todos) => (
  	todos.map((todo, index) => <Text key={index}>{todo.text}</Text>)
  )
  return (
	  <View style={{margin: 128}}>
	  {renderTodos(todos)}
	   <View>
		  <TouchableHighlight  onPress={() => onClick(input)}>
		    <Text>Add Todo</Text>
		  </TouchableHighlight>
		  <TextInput onChangeText={(text) => input = text} />
		</View>
	  </View>
  )
};

export default PageTwo;
