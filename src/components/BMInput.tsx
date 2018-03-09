import React, { Component } from "react";
import {
  RegisteredStyle,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle
} from "react-native";

import Color from "../styles/Color";

interface IProps {
  label: string;
  style: RegisteredStyle<ViewStyle>;
}

const styles = StyleSheet.create({
  label: {
    color: Color.BLUE
  },
  textInput: {
    borderBottomColor: Color.BLACK,
    borderBottomWidth: 2,
    paddingVertical: 8
  }
});

class BMInput extends Component<IProps> {
  public render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.label}>{this.props.label}</Text>

        <TextInput style={styles.textInput} />
      </View>
    );
  }
}

export default BMInput;
