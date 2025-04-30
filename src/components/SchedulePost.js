import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SchedulePost() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const schedulePost = () => {
    // Placeholder function to handle scheduling logic
    alert(`Post scheduled for ${date.toLocaleString()}`);
  };

  return (
    <View className="p-4">
      <Text className="text-lg mb-4">Schedule a Post</Text>
      <Button onPress={showDatepicker} title="Select Date & Time" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View className="mt-4">
        <Button onPress={schedulePost} title="Schedule Post" />
      </View>
    </View>
  );
}
