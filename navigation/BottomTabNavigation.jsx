import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS } from '../constants/theme';
const Tab = createBottomTabNavigator();
const ScreenOptions = {
    tabBarShowLabel: false,
    //tabBarHideOnKeyboard: true,
    headerShown: false,
    headerShow: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen name="Homeee" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name={"search-sharp"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabNavigation