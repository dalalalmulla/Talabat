import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { restaurants } from "../data/restaurants";
import { menuItems } from "../data/menuItems";

export default function RestaurantDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const restaurant = restaurants.find((r) => r.id === id);
  const items = menuItems.filter((m) => m.restaurantId === id);

  if (!restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Restaurant not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        {restaurant.cuisine} • ⭐ {restaurant.rating} •{" "}
        {restaurant.deliveryTime}
      </Text>

      <Text style={styles.sectionTitle}>Menu</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.85}
          onPress={() => router.push(`/item/${item.id}/${restaurant.id}`)}
        >
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.meta}>{item.price.toFixed(3)} KD</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#FFF7F2",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F3D6C8",
    marginBottom: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: "#6B7280",
  },
});
