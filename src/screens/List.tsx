import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  InteractionManager,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Card from "../components/Card";
import Title from "../components/Title";
import Color from "../styles/Color";
import Space from "../styles/Space";
import { ITrip } from "../typings/trip";

// tslint:disable-next-line:no-var-requires
const trips = require("../../trips.json");

const COLUMNS_COUNT = 2;
const ITEM_WIDTH =
  (Dimensions.get("window").width - Space.MEDIUM * (COLUMNS_COUNT + 1)) /
  COLUMNS_COUNT;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Color.LIGHTGRAY,
    padding: Space.MEDIUM
  },
  searchButton: {
    flex: 1,
    justifyContent: "center",
    paddingRight: Space.SMALL
  },
  separator: {
    height: Space.MEDIUM
  }
});

class List extends Component {
  public static route = {
    navigationBar: {
      renderRight: (route: any) => (
        <TouchableOpacity
          onPress={route.params.navigateToSearchModal}
          style={styles.searchButton}
        >
          <Icon color={Color.GRAY} name="search" size={18} />
        </TouchableOpacity>
      ),
      renderTitle: ({ params }: any) => {
        const subtitleTexts = [
          params.location && `장소: ${params.location}`,
          params.date && `날짜: ${params.date}`
        ];
        const title = params.guestCount
          ? `가장 선호하는 ${params.guestCount}인 여행`
          : "가장 선호하는 여행";

        return (
          <Title
            title={title}
            subtitle={subtitleTexts.filter(t => t).join(", ")}
          />
        );
      }
    }
  };

  public componentWillMount() {
    this.navigator.updateCurrentRouteParams({
      navigateToSearchModal: this.navigateToSearchModal
    });
  }

  private get navigator() {
    return (this.props as any).navigator;
  }

  public render() {
    return (
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={trips}
        numColumns={COLUMNS_COUNT}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.itemSeparator}
      />
    );
  }

  private navigateToSearchModal = () => {
    this.navigator.push("search", {
      setFilterList: ({
        guestCount,
        location
      }: {
        guestCount: string;
        location: string;
      }) => {
        InteractionManager.runAfterInteractions(() => {
          this.navigator.updateCurrentRouteParams({ guestCount, location });
        });
      }
    });
  };

  private itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  private renderItem = ({ item, index }: { item: ITrip; index: number }) => {
    const style = {
      marginRight: index % COLUMNS_COUNT === 0 ? Space.MEDIUM : 0
    };

    return <Card width={ITEM_WIDTH} style={style} trip={item} />;
  };
}

export default List;
