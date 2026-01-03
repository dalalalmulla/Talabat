import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { menuItems } from "../../../../data/menuItems";
import { restaurants } from "../../../../data/restaurants";

export default function OrderConfirmation() {
  const router = useRouter();
  const { itemId, quantity, restaurantId } = useLocalSearchParams<{
    itemId: string;
    quantity: string;
    restaurantId: string;
  }>();

  const item = menuItems.find((m: any) => m.id === itemId);
  const restaurant = restaurants.find((r: any) => r.id === restaurantId);

  const qty = Math.max(1, Number(quantity || 1));
  const total = item ? item.price * qty : 0;

  if (!item || !restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Order not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Order Confirmed</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Restaurant</Text>
        <Text style={styles.value}>{restaurant.name}</Text>

        <Text style={styles.label}>Item</Text>
        <Text style={styles.value}>{item.name}</Text>

        <Text style={styles.label}>Quantity</Text>
        <Text style={styles.value}>{qty}</Text>

        <Text style={styles.label}>Total</Text>
        <Text style={styles.value}>{total.toFixed(3)} KD</Text>
      </View>

      <Pressable style={styles.btn} onPress={() => router.push("/home")}>
        <Text style={styles.btnText}>Back to Restaurants</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF7F2",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 14,
    color: "#111827",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F3D6C8",
    marginBottom: 14,
  },
  label: { fontSize: 12, color: "#6B7280", marginTop: 10 },
  value: { fontSize: 16, fontWeight: "800", color: "#111827", marginTop: 4 },
  btn: {
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
