import { View, Text } from "react-native"
import { styles } from "./styles"
import { useAuth } from "../../hook/auth"
import { FontAwesome5 } from "@expo/vector-icons"
import { ComponentBottonInterface } from "../../components"
import React from "react"

export function Perfil() {
    const {user, signOut} = useAuth()
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View>

            </View>
        </View>
        
    )
}