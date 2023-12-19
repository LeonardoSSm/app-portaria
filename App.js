import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import Login from './src/components/login/index'

export default function App() {
  return (
    <KeyboardAvoidingView>
      <View>
        <Login></Login>
      </View>
    </KeyboardAvoidingView>
  );
}

