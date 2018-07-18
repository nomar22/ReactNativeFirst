import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/MainTabs/FindPlace';
import SharePlaceScreen from './src/screens/MainTabs/SharePlace';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';
import DetailScreen from './src/screens//MainTabs/Detail';

const store = configureStore();
 



// Register Screens

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('awesome-places.SideDrawerScreen', () => SideDrawerScreen)
Navigation.registerComponent("awesome-places.DetailScreen", () => DetailScreen);





// Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login",
    navigatorStyle: {
      navBarBackgroundColor: '#551A8B',
      navBarTextFontBold:true,
      navBarTextColor:'#ff9900'
  }
  }
});