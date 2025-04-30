import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SchedulePost from './src/components/SchedulePost';

function ScheduleScreen() {
  return (
    <View className="flex-1">
      <SchedulePost />
    </View>
  );
}

import ContentSuggestion from './src/components/ContentSuggestion';

function ContentSuggestionScreen() {
  return (
    <View className="flex-1">
      <ContentSuggestion />
    </View>
  );
}

import EngagementTracking from './src/components/EngagementTracking';

function EngagementScreen() {
  return (
    <View className="flex-1">
      <EngagementTracking />
    </View>
  );
}

import AnalyticsDashboard from './src/components/AnalyticsDashboard';

function AnalyticsScreen() {
  return (
    <View className="flex-1">
      <AnalyticsDashboard />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Schedule') {
              iconName = 'calendar';
            } else if (route.name === 'Content') {
              iconName = 'bulb';
            } else if (route.name === 'Engagement') {
              iconName = 'people';
            } else if (route.name === 'Analytics') {
              iconName = 'stats-chart';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Content" component={ContentSuggestionScreen} />
        <Tab.Screen name="Engagement" component={EngagementScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
