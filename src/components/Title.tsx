import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  title: string;
  subtitle?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.9)",
    fontSize: 12,
    textAlign: "center"
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center"
  }
});

class Title extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>

        {this.props.subtitle && (
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        )}
      </View>
    );
  }
}

export default Title;
