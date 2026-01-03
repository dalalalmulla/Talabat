import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { menuItems } from "../../data/menuItems";
import { restaurants } from "../../data/restaurants";

export default function ItemDetail() {
  const router = useRouter();
  const { id, restaurantId } = useLocalSearchParams<{
    id: string;
    restaurantId: string;
  }>();

  const item = menuItems.find((m) => m.id === id);
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  const [quantity, setQuantity] = useState(1);

  if (!item || !restaurant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>
        {restaurant.name} • {item.price.toFixed(3)} KD
      </Text>

      <Text style={styles.desc}>{item.description}</Text>

      <View style={styles.qtyRow}>
        <Pressable
          style={styles.qtyBtn}
          onPress={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          <Text style={styles.qtyBtnText}>-</Text>
        </Pressable>

        <Text style={styles.qtyValue}>{quantity}</Text>

        <Pressable
          style={styles.qtyBtn}
          onPress={() => setQuantity((q) => q + 1)}
        >
          <Text style={styles.qtyBtnText}>+</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.addBtn}
        onPress={() =>
          router.push(`/cart/${item.id}/${quantity}/${restaurantId}`)
        }
      >
        <Text style={styles.addBtnText}>Add to Cart</Text>
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
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 14,
  },
  desc: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
    marginBottom: 18,
    lineHeight: 20,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    marginBottom: 18,
  },
  qtyBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    minWidth: 30,
    textAlign: "center",
  },
  addBtn: {
    backgroundColor: "#FF6B35",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  addBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
