// Both index.android.js & index.ios.js are mapped to require App.js component 
// so code is being place in one location instead of split up

// import necessary packages
import { AppRegistry } from "react-native";

// import necessary components
import App from "./App";

AppRegistry.registerComponent("magicMenu", () => App);
