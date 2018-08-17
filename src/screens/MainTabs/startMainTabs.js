import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

 

export default () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource('ios-menu', 30)

    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-places.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                    icon: sources[0], // local image asset for the tab icon unselected state (optional on iOS)
                    title: 'Find Place', // title of the screen as appears in the nav bar (optional)
                    navigatorStyle: {
                        navBarBackgroundColor: '#551A8B',
                        navBarTextFontBold: true,
                        navBarTextColor: '#ff9900'
                    }, // override the navigator style for the tab  screen, see "Styling the navigator" below (optional),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id:"sideDrawerToggle"
                            }
                        ],
                    } // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
                },
                {
                    label: 'Share Place',
                    screen: 'awesome-places.SharePlaceScreen',
                    icon: sources[1],
                    title: 'Share Place',
                    navigatorStyle: {
                        navBarBackgroundColor: '#551A8B',
                        navBarTextFontBold: true,
                        navBarTextColor: '#ff9900'
                    },
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id:"sideDrawerToggle"
                            }
                        ],
                    }
                    
                }
            ],
            appStyle: {
                tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
                tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
                tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
                initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
                orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
                bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
                bottomTabBadgeBackgroundColor: 'green' // Optional, change badge background color. Android only
            },
            drawer: { // optional, add this if you want a side menu drawer in your app
                left: { // optional, define if you want a drawer from the left
                    screen: 'awesome-places.SideDrawerScreen', // unique ID registered with Navigation.registerScreen
                    passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                    icon: sources[0]
                },
                disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
            },
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
        });

    }
    )
}
    

