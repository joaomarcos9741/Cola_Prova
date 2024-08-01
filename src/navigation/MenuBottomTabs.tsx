import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenMensage, ScreenProfile} from '../screens';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';

type MenuTabParam = {
    Mensage: undefined
    Profile: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Profile">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTab() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ScreenProfile}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={24} color="black" />
                    )
                }}

            />

            <Tab.Screen name="Mensage" component={ScreenMensage}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-o" size={24} color="black" />
                   )
                }}

            />

        </Tab.Navigator>
    )
}