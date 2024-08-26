import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { colors } from "../styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigation } from "./tab.navigation";
import { SlideCamera } from "../screens";


type DraWerParamList = {
    Tab: undefined
    Camera: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DraWerParamList, "Tab">
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DraWerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.secondary
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.white} />

                    ),
                }}
            />

            <Drawer.Screen name='Camera' component={SlideCamera}
                options={{
                    drawerLabel: 'Camera',
                    headerTitle: 'Camera',
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.white} />

                    ),
                }}
            />  

        </Drawer.Navigator>
    )
}