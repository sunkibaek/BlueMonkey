import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProperties,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProperties,
  View
} from "react-native";

import Color from "../styles/Color";

type IProps = {
  fauxInput?: boolean;
  label: string;
  onPress?: TouchableWithoutFeedbackProperties["onPress"];
} & TextInputProperties;

const styles = StyleSheet.create({
  fauxInputContainer: {},
  label: {
    color: Color.GRAY
  },
  textInput: {
    borderBottomColor: Color.GRAY,
    borderBottomWidth: 1,
    height: 34,
    paddingVertical: 8
  }
});

class BMInput extends Component<IProps> {
  public render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={this.props.style}>
          <Text style={styles.label}>{this.props.label}</Text>

          {this.props.fauxInput ? (
            <View style={styles.textInput}>
              <Text>{this.props.value}</Text>
            </View>
          ) : (
            <TextInput {...this.getRestProps()} style={styles.textInput} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  private getRestProps = () => {
    const restProps = { ...this.props };

    delete restProps.label;
    delete restProps.onPress;

    return restProps;
  };
}

export default BMInput;
