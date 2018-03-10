import React, { Component } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Color from "../styles/Color";
import { ITrip } from "../typings/trip";

// tslint:disable-next-line:no-var-requires
const trips = require("../../trips.json");

const ITEM_WIDTH = (Dimensions.get("window").width - 16 * 3) / 2;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Color.LIGHTGRAY,
    padding: 16
  },
  separator: {
    height: 16
  }
});

class List extends Component {
  public static navigationOptions = {
    title: "가장 선호하는 여행"
  };

  public render() {
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={trips}
        numColumns={2}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.itemSeparator}
      />
    );
  }

  private itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  private renderItem = ({ item, index }: { item: ITrip; index: number }) => {
    const style = {
      marginRight: index % 2 === 0 ? 16 : 0
    };

    return <Card width={ITEM_WIDTH} style={style} trip={item} />;
  };
}

export default List;
