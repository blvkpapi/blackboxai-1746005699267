import React from 'react';
import { View, Text, Button } from 'react-native';
import { authenticateInstagram, authenticateTwitter, authenticateFacebook } from '../auth/auth';

export default function AuthScreen() {
  const handleInstagramLogin = async () => {
    const token = await authenticateInstagram();
    alert('Instagram token: ' + token);
  };

  const handleTwitterLogin = async () => {
    const token = await authenticateTwitter();
    alert('Twitter token: ' + token);
  };

  const handleFacebookLogin = async () => {
    const token = await authenticateFacebook();
    alert('Facebook token: ' + token);
  };

  return (
    <View className="p-4 flex-1 justify-center items-center">
      <Text className="text-lg mb-4">Authenticate Social Media Accounts</Text>
      <Button title="Login with Instagram" onPress={handleInstagramLogin} />
      <View className="my-2" />
      <Button title="Login with Twitter" onPress={handleTwitterLogin} />
      <View className="my-2" />
      <Button title="Login with Facebook" onPress={handleFacebookLogin} />
    </View>
  );
}
