import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../styles/Color";

interface IProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    borderColor: Color.LIGHTGRAY,
    borderRadius: 2,
    borderWidth: 1,
    marginRight: 4,
    padding: 4
  },
  title: {
    fontSize: 9
  }
});

const Tag = ({ title }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Tag;
