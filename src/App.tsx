import { StackNavigator } from "react-navigation";

import Search from "./screens/Search";

const App = StackNavigator(
  {
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: "Search"
  }
);

export default App;
