import { StackNavigator } from "react-navigation";

import List from "./screens/List";
import Search from "./screens/Search";

const Main = StackNavigator(
  {
    List: {
      screen: List
    }
  },
  {
    initialRouteName: "List"
  }
);
const App = StackNavigator(
  {
    Main: {
      screen: Main
    },
    SearchModal: {
      screen: Search
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default App;
