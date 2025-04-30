import React from 'react';
import { View, Text, FlatList } from 'react-native';

const engagementData = [
  { platform: 'Instagram', likes: 1200, comments: 300, shares: 150 },
  { platform: 'Twitter', likes: 900, comments: 200, shares: 100 },
  { platform: 'Facebook', likes: 1500, comments: 400, shares: 200 },
];

export default function EngagementTracking() {
  return (
    <View className="p-4 flex-1">
      <Text className="text-lg mb-4">Engagement Tracking</Text>
      <FlatList
        data={engagementData}
        keyExtractor={(item) => item.platform}
        renderItem={({ item }) => (
          <View className="mb-4 p-4 bg-gray-200 rounded">
            <Text className="font-bold">{item.platform}</Text>
            <Text>Likes: {item.likes}</Text>
            <Text>Comments: {item.comments}</Text>
            <Text>Shares: {item.shares}</Text>
          </View>
        )}
      />
    </View>
  );
}
