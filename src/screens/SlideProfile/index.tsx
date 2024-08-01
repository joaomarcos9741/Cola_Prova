import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Text>Meu perfiu</Text>
      <StatusBar style="auto" />
    </View>
  );
}