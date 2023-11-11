import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    paddingTop: 50,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    paddingTop: 20,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31CF67",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 32,
  },
  participant: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 16,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});
