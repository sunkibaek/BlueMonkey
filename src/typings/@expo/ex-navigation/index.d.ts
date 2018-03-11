declare module "@expo/ex-navigation" {
  function createRouter(generator: () => any): any;
  function NavigationProvider(props: any): JSX.Element;
  function StackNavigation(props: any): JSX.Element;

  class NavigationStyles {
    public static FloatVertical: any;
  }

  export {
    createRouter,
    NavigationProvider,
    NavigationStyles,
    StackNavigation
  };
}
