import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { restaurants } from "../data/restaurants";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>

      {restaurants.map((r) => (
        <TouchableOpacity
          key={r.id}
          style={styles.card}
          onPress={() => router.push(`/restaurant/${r.id}`)}
          activeOpacity={0.8}
        >
          <Text style={styles.name}>{r.name}</Text>
          <Text style={styles.meta}>
            {r.cuisine} • ⭐ {r.rating} • {r.deliveryTime}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F3",
    padding: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 16,
    color: "#111827",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F2D6C8",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  meta: {
    fontSize: 14,
    color: "#6B7280",
  },
});
