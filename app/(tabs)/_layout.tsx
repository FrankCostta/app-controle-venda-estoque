import Colors from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.dark_gray,
        tabBarActiveTintColor: Colors.dark_gray,
        tabBarActiveBackgroundColor: Colors.green,
        tabBarStyle: {
          backgroundColor: Colors.light_gray,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Vendas",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={25} name="cash-register" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="estoque"
        options={{
          title: "Estoque",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={25} name="box-open" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="relatorio"
        options={{
          title: "Relatório",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={25} name="chart-pie" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
