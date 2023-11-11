import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Manoel",
    "Neo",
    "Manolo",
    "Manoel Carvalho",
    "Eulania",
    "Vinicius",
    "Rafael",
    "Gildo",
    "Erivan",
    "Eduardo",
  ];

  function handleParticimatAdd() {
    console.log(Platform.OS == "ios" ? "Add iOS" : "Add Android");
  }

  function handleParticimatRemove(name: string) {
    console.log(
      Platform.OS == "ios" ? `Removeu  ${name} iOS` : `Removeu ${name} Android`
    );
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sábado, 11 de novembro.</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
          />
          <TouchableOpacity style={styles.button} onPress={handleParticimatAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.participant}>Participantes</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticimatRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />
      </View>
    </>
  );
}
