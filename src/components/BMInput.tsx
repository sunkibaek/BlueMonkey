import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProperties,
  View
} from "react-native";

import Color from "../styles/Color";

type IProps = {
  label: string;
} & TextInputProperties;

const styles = StyleSheet.create({
  label: {
    color: Color.GRAY
  },
  textInput: {
    borderBottomColor: Color.GRAY,
    borderBottomWidth: 1,
    paddingVertical: 8
  }
});

class BMInput extends Component<IProps> {
  public render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.label}>{this.props.label}</Text>

        <TextInput {...this.props} style={styles.textInput} />
      </View>
    );
  }
}

export default BMInput;
