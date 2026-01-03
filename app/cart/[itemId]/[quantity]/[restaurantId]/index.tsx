import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { menuItems } from "../../../../../data/menuItems";
import { restaurants } from "../../../../../data/restaurants";
import { useCart } from "../../../../../context/CartContext";

export default function CartScreen() {
  const router = useRouter();
  const { items } = useCart();
  const cartItem = items[0];

  // 🟡 إذا السلة فاضية
  if (!cartItem) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart is empty</Text>
        <Pressable style={styles.secondaryBtn} onPress={() => router.back()}>
          <Text style={styles.secondaryBtnText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  const item = menuItems.find((m: any) => m.id === cartItem.itemId);
  const restaurant = restaurants.find(
    (r: any) => r.id === cartItem.restaurantId
  );

  if (!item || !restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart not found</Text>
        <Pressable style={styles.secondaryBtn} onPress={() => router.back()}>
          <Text style={styles.secondaryBtnText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  const qty = cartItem.quantity;
  const total = item.price * qty;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <View style={styles.card}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.meta}>{restaurant.name}</Text>
        <Text style={styles.meta}>
          {item.price.toFixed(3)} KD × {qty}
        </Text>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{total.toFixed(3)} KD</Text>
        </View>
      </View>

      <Pressable
        style={styles.primaryBtn}
        onPress={() => router.push(`/order/${item.id}/${qty}/${restaurant.id}`)}
      >
        <Text style={styles.primaryBtnText}>Place Order</Text>
      </Pressable>

      <Pressable style={styles.secondaryBtn} onPress={() => router.back()}>
        <Text style={styles.secondaryBtnText}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F3D6C8",
    marginBottom: 14,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
    marginBottom: 6,
  },
  meta: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#F3D6C8",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "900",
    color: "#111827",
  },
  primaryBtn: {
    backgroundColor: "#FF6B35",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  secondaryBtn: {
    backgroundColor: "#111827",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});
