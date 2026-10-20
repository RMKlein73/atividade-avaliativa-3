
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { sessoes } from "./components/dados";

export default function Sessoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RAFAFLIX ✳</Text>
      <Text style={styles.titulo}>Sessões</Text>

      <FlatList
        data={sessoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.cartaz }} style={styles.cartaz} />
            <View style={styles.info}>
              <Text style={styles.horario}>{item.horario} • {item.tipo}</Text>
              <Text style={styles.nome}>{item.filme}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
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
  card: { flexDirection: "row", backgroundColor: "#FFF9F0", marginBottom: 15, borderRadius: 9, overflow: "hidden" },
  cartaz: { width: 100, height: 140, backgroundColor: "#D8C9B7" },
  info: { flex: 1, justifyContent: "center", padding: 13 },
  horario: { color: "#D97845", fontWeight: "bold", fontSize: 12 },
  nome: { color: "#30231F", fontSize: 17, fontWeight: "bold", marginTop: 9 },
  preco: { color: "#7B2638", fontSize: 16, fontWeight: "900", marginTop: 10 },
});
