import React from "react";
import {
  RegisteredStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";

import priceFormat from "../commons/priceFormat";
import Color from "../styles/Color";
import { ITrip } from "../typings/trip";
import Tag from "./Tag";

interface IProps {
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
  trip: ITrip;
  width: number;
}

const IMAGE_RATIO = 3 / 4;

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
    borderTopRightRadius: 4
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

const Card = ({ style, trip, width }: IProps) => {
  const height = width * IMAGE_RATIO;

  return (
    <View style={[styles.container, { width }, style]}>
      <View style={[styles.imageContainer, { height }]} />

      <View style={styles.textContainer}>
        <View style={styles.labelContainer}>
          {trip.tags.map(tag => <Tag key={tag} title={tag} />)}
        </View>

        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.price}>{priceFormat(trip.price)}</Text>
        <Text style={styles.reservationInfo}>6월, 7월 예약 가능</Text>
      </View>
    </View>
  );
};

export default Card;
