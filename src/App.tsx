import { StackNavigator } from "react-navigation";

import List from "./screens/List";
import Search from "./screens/Search";

const App = StackNavigator(
  {
    List: {
      screen: List
    },
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: "Search"
  }
);

export default App;
