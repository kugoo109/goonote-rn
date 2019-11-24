import React, { Component } from 'react'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import Button from '../Components/Button/Button'

export default class RegisterScreen extends Component {

  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleRegister = () => {
    this.props.navigation.navigate('App')
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior='padding'>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoText}>goonote</Text>
            <TextInput placeholder='Email' style={styles.input} />
            <TextInput placeholder='Username' style={styles.input} />
            <TextInput placeholder='Password' style={styles.input} secureTextEntry />
            <Button
              style={styles.register}
              text='Register'
              type='primary'
              onPress={this.handleRegister}
            />
            <Button
              style={styles.login}
              text='Login'
              type='secondary'
              onPress={this.handleLogin}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2c3e50"
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2980b6',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    borderRadius: 2,
    color: '#fff'
  },
  register: {
    marginBottom: 10,
  },
  login: {
  },
})