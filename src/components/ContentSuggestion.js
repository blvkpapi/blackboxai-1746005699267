import React from 'react';
import { View, Text, FlatList } from 'react-native';

const suggestions = [
  'Post about trending topics',
  'Share user testimonials',
  'Create how-to videos',
  'Use popular hashtags',
  'Engage with followers regularly',
];

export default function ContentSuggestion() {
  return (
    <View className="p-4 flex-1">
      <Text className="text-lg mb-4">Content Suggestions</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="mb-2 p-2 bg-gray-200 rounded">
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
