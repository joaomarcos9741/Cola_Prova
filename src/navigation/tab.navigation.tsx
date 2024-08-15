import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenMensagem} from '../screens';
import { Ionicons, FontAwesome, Octicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../styles/GlobalStyles';
import { MessageNavigation } from './message.navigation';

type MenuTabParam = {
    Perfil: undefined
    Mensagem: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white
        }}
        >
            <Tab.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-o" size={24} color="black" />
                   )
                }}

            />

            <Tab.Screen name="Mensagem" component={ScreenMensagem}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={24} color="black" />
                    )
                }}

            />

            <Tab.Screen name='Mensagem' component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={24} color={colors.white}/>
                    ),
                }}  
            />


        </Tab.Navigator>
    )
}