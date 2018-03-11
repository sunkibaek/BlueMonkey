import {
  createRouter,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import React from "react";

import List from "./screens/List";
import Search from "./screens/Search";

const Router = createRouter(() => ({
  list: () => List,
  search: () => Search
}));

const App = () => (
  <NavigationProvider router={Router}>
    <StackNavigation initialRoute={Router.getRoute("list")} />
  </NavigationProvider>
);

export default App;
