import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProperties
} from "react-native";
import Color from "../styles/Color";

interface IProps {
  title: string;
  onPress: TouchableOpacityProperties["onPress"];
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.WHITEBLUE,
    borderRadius: 8,
    height: 44,
    justifyContent: "center"
  },
  title: {
    color: Color.BLUE
  }
});

const BMButton = ({ onPress, title }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BMButton;
