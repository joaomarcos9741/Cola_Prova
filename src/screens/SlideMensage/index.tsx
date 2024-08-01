import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export function Mensage() {
  return (
    <View style={styles.container}>
      <Text>Bora de Moon Board</Text>
      <StatusBar style="auto" />
    </View>
  );
}

