
import { View, Text, FlatList, StyleSheet } from "react-native";
import { filmes } from "./components/dados";

export default function Filmes() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RAFAFLIX ✳</Text>
      <Text style={styles.titulo}>Em cartaz</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.info}>{item.genero} • {item.duracao}</Text>
            <Text style={styles.idade}>{item.idade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2EBDD", padding: 22, paddingTop: 55 },
  logo: { color: "#7B2638", fontWeight: "900", letterSpacing: 3, fontSize: 16 },
  titulo: { color: "#30231F", fontSize: 34, fontWeight: "900", marginVertical: 22 },
  card: { paddingVertical: 17, borderBottomWidth: 1, borderColor: "#D8C9B7" },
  nome: { color: "#7B2638", fontSize: 20, fontWeight: "bold" },
  info: { color: "#776A60", marginTop: 7 },
  idade: { color: "#D97845", fontWeight: "bold", marginTop: 6, fontSize: 12 },
});
