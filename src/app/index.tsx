
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RAFAFLIX ✳</Text>
      <Text style={styles.sub}>Os melhores titulos estao aqui!</Text>

      <Text style={styles.titulo}>Aproveite o melhor.{'\n'}em uma so tela.</Text>
      <Text style={styles.descricao}>
        Descubra seu próximo filme favorito.
      </Text>

      <Pressable style={styles.botao} onPress={() => router.push("/filmes")}>
        <Text style={styles.texto}>Explorar filmes ↗</Text>
      </Pressable>

      <Pressable style={styles.botao2} onPress={() => router.push("/sessoes")}>
        <Text style={styles.texto2}>Ver sessões e horários</Text>
      </Pressable>

      <Text style={styles.rodape}>SUA EXPERIÊNCIA COMEÇA AQUI.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2EBDD", justifyContent: "center", padding: 28 },
  logo: { color: "#7B2638", fontSize: 25, fontWeight: "900", letterSpacing: 3 },
  sub: { color: "#D97845", marginTop: 8, letterSpacing: 4, fontSize: 11 },
  titulo: { color: "#30231F", fontSize: 39, fontWeight: "900", marginTop: 65 },
  descricao: { color: "#776A60", fontSize: 15, marginTop: 15, marginBottom: 35 },
  botao: { backgroundColor: "#7B2638", padding: 18, borderRadius: 8 },
  texto: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold", textAlign: "center" },
  botao2: { borderWidth: 1, borderColor: "#7B2638", padding: 17, borderRadius: 8, marginTop: 12 },
  texto2: { color: "#7B2638", fontSize: 15, textAlign: "center", fontWeight: "bold" },
  rodape: { color: "#A39585", fontSize: 10, letterSpacing: 2, marginTop: 55, textAlign: "center" },
});
