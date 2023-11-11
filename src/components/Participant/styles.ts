import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#1F1E25",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: "#FDFCFE",
    padding: 8,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E23C44",
  },
  buttonText: {
    color: "#FDFCFE",
  },
});
