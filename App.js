import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import {Header} from './src/components/common'

export default class App extends Component {

  //initialize firebase
  componentWillMount(){
    const config = {
    apiKey: "AIzaSyD44Y9PaVEO9MNOz5C9ttMdkHqcsYleQ1U",
    authDomain: "schedule-app-2637a.firebaseapp.com",
    databaseURL: "https://schedule-app-2637a.firebaseio.com",
    projectId: "schedule-app-2637a",
    storageBucket: "schedule-app-2637a.appspot.com",
    messagingSenderId: "771724377788"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header headertext="Blah" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
