import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ThreeScreen from '../screens/ThreeScreen';
import LoginScreen from '../screens/LoginScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'หน้าแรก',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
  
      />
              {/* <BottomTab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'สมาชิก',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contact" />,
        }}
      /> md-book */ 
      }
      
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'สมาชิก',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contact" />,
        }}
      />
      <BottomTab.Screen
        name="ThreeScreen"
        component={ThreeScreen}
        options={{
          title: 'ติดต่อเรา',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-call" />,
        }}
      />
    
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

//   switch (routeName) {
//     case 'Home':
//       return 'หน้าหลัก';
//     case 'Links':
//       return 'Links to learn more';
//   }
// }
