import React, { Component } from "react";
import {
  RegisteredStyle,
  StyleSheet,
  Text,
  TextInput,
  TextInputProperties,
  View,
  ViewStyle
} from "react-native";

import Color from "../styles/Color";

interface IProps {
  label: string;
  onFocus?: TextInputProperties["onFocus"];
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
      <View>
        <View style={this.props.style}>
          <Text style={styles.label}>{this.props.label}</Text>

          <TextInput style={styles.textInput} onFocus={this.props.onFocus} />
        </View>
      </View>
    );
  }
}

export default BMInput;
