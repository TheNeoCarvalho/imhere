import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <>
      <StatusBar translucent style="light" />
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sábado, 11 de novembro.</Text>
      </View>
    </>
  );
}
