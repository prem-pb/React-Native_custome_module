import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  NativeModules
} from "react-native";
const UPI = NativeModules.UPI;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openLink = async () => {
    let { amount } = this.state;
    let UpiUrl =
      "upi://pay?pa=govindbiswas079-2@okaxis&pn=Govinda%20Biswas&aid=uGICAgICDyJGZHg";
    let response = await UPI.openLink(UpiUrl);
    console.log(response); //however you want to handle response
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"Amount"}
          style={styles.TextInput}
          onChangeText={amount => this.setState({ amount })}
          value={this.state.amount}
        />
        <TouchableOpacity style={styles.paymentButton} onPress={this.openLink}>
          <Text style={{ color: "white" }}>Make Payment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 150,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  TextInput: { width: "80%", height: 40, borderColor: "gray", borderWidth: 1 },
  paymentButton: {
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});