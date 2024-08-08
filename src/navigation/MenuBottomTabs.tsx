import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenLogin, ScreenRegister} from '../screens';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';

type MenuTabParam = {
    Login: undefined
    Register: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Register">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTab() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Register" component={ScreenRegister}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={24} color="black" />
                    )
                }}

            />

            <Tab.Screen name="Login" component={ScreenLogin}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-o" size={24} color="black" />
                   )
                }}

            />

        </Tab.Navigator>
    )
}