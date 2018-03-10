import React from "react";
import {
  RegisteredStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";

import Color from "../styles/Color";
import Tag from "./Tag";

interface IProps {
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: 4,
    elevation: 1,
    shadowColor: Color.GRAY,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  imageContainer: {
    backgroundColor: Color.GRAY,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 100
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: 4
  },
  price: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 4
  },
  reservationInfo: {
    color: Color.GRAY,
    fontSize: 10,
    marginBottom: 4
  },
  textContainer: {
    padding: 8
  },
  title: {
    marginBottom: 4
  }
});

const Card = ({ style }: IProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer} />

      <View style={styles.textContainer}>
        <View style={styles.labelContainer}>
          <Tag title="제주도" />
          <Tag title="월정리" />
        </View>

        <Text style={styles.title}>당신과 내가 함께할 제주도 해변가</Text>
        <Text style={styles.price}>650,000원</Text>
        <Text style={styles.reservationInfo}>6월, 7월 예약 가능</Text>
      </View>
    </View>
  );
};

export default Card;
