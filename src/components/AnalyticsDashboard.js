import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchInstagramData } from '../api/instagram';
import { fetchTwitterData } from '../api/twitter';
import { fetchFacebookData } from '../api/facebook';

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Fetch data from APIs (using placeholder tokens here)
      const instagram = await fetchInstagramData('instagram-access-token');
      const twitter = await fetchTwitterData('twitter-bearer-token');
      const facebook = await fetchFacebookData('facebook-access-token');

      setAnalyticsData({
        Instagram: instagram,
        Twitter: twitter,
        Facebook: facebook,
      });
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
      <Text className="text-lg mb-4">Analytics Dashboard</Text>
      <Text>Instagram Engagement Rate: {analyticsData.Instagram.engagementRate}%</Text>
      <Text>Twitter Engagement Rate: {analyticsData.Twitter.engagementRate}%</Text>
      <Text>Facebook Engagement Rate: {analyticsData.Facebook.engagementRate}%</Text>
      {/* Placeholder for more detailed charts and analytics */}
    </View>
  );
}
