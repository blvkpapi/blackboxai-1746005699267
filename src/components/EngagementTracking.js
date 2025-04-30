import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchInstagramData } from '../api/instagram';
import { fetchTwitterData } from '../api/twitter';
import { fetchFacebookData } from '../api/facebook';

export default function EngagementTracking() {
  const [engagementData, setEngagementData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Fetch data from APIs (using placeholder tokens here)
      const instagram = await fetchInstagramData('instagram-access-token');
      const twitter = await fetchTwitterData('twitter-bearer-token');
      const facebook = await fetchFacebookData('facebook-access-token');

      setEngagementData([
        { platform: 'Instagram', ...instagram },
        { platform: 'Twitter', ...twitter },
        { platform: 'Facebook', ...facebook },
      ]);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="p-4 flex-1">
      <Text className="text-lg mb-4">Engagement Tracking</Text>
      <FlatList
        data={engagementData}
        keyExtractor={(item) => item.platform}
        renderItem={({ item }) => (
          <View className="mb-4 p-4 bg-gray-200 rounded">
            <Text className="font-bold">{item.platform}</Text>
            <Text>Followers: {item.followers}</Text>
            <Text>Posts: {item.posts || item.tweets}</Text>
            <Text>Engagement Rate: {item.engagementRate}%</Text>
          </View>
        )}
      />
    </View>
  );
}
