import React from 'react';
import { View, Text } from 'react-native';

export default function AnalyticsDashboard() {
  return (
    <View className="p-4 flex-1">
      <Text className="text-lg mb-4">Analytics Dashboard</Text>
      <Text>Charts and analytics will be displayed here.</Text>
      {/* Placeholder for charts - can integrate libraries like react-native-chart-kit */}
    </View>
  );
}
