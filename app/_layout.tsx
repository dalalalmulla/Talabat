import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="home" options={{ title: "Restaurants" }} />
      <Stack.Screen name="search" options={{ title: "Search" }} />
      <Stack.Screen name="orders" options={{ title: "Orders" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="restaurant/[id]" options={{ title: "Restaurant" }} />
    </Stack>
  );
}
