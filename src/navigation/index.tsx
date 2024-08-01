import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuTab } from "./MenuBottomTabs";
export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuTab />
        </NavigationContainer>
    );
}