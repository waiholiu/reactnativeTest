import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as firebase from "firebase";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: 'Useless Placdeholder', password: 'Password' };
  }

  render() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBwD6srsoYzWSUiZaoNd4HVZHtkc-OG_8w",
      authDomain: "demoreactnative-4e037.firebaseapp.com",
      databaseURL: "https://demoreactnative-4e037.firebaseio.com",
      projectId: "demoreactnative-4e037",
      storageBucket: "demoreactnative-4e037.appspot.com",
      messagingSenderId: "114290350786"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }


    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />

        <TextInput
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />


        <Text>{this.state.username} amnd {this.state.password} </Text>
        <Text> you make wllill kjjkkakkkjkj dutomatjjjically reloahd.</Text>
        <Text>Shake your phone to open thevfv developer menu.</Text>

      </View>
    );
  }


  async signup(email, pass) {

    try {
      await firebase.auth()
        .createUserWithEmailAndPassword(email, pass);

      console.log("Account created");

      // Navigate to the Home page, the user is auto logged in

    } catch (error) {
      console.log(error.toString())
    }

  }

  async login(email, pass) {

    try {
      await firebase.auth()
        .signInWithEmailAndPassword(email, pass);

      console.log("Logged In!");

      // Navigate to the Home page

    } catch (error) {
      console.log(error.toString())
    }

  }

  async logout() {

    try {

      await firebase.auth().signOut();

      // Navigate to login view

    } catch (error) {
      console.log(error);
    }

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
