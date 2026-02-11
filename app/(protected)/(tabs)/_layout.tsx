import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🔍</Text>,
        }}
      />
    </Tabs>
  );
}
