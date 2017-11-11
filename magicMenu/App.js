import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "./src/components/common";
import AR from "./src/components/AR";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText = {"Magic Menu"} />
        <AR />
      </View>
    );
  }
}

