import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Color from "../styles/Color";

interface IProps {
  label: string;
}

const styles = StyleSheet.create({
  label: {
    color: Color.BLUE
  },
  textInput: {
    borderBottomColor: Color.BLACK,
    borderBottomWidth: 2
  }
});

class BMInput extends Component<IProps> {
  public render() {
    return (
      <View>
        <Text style={styles.label}>{this.props.label}</Text>

        <TextInput style={styles.textInput} />
      </View>
    );
  }
}

export default BMInput;
