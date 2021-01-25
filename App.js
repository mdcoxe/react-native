import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <CarItem name={'Model 3'} tagline={'Order Online for '}
      taglineCTA={'Touchless Delivery'} image={require('./assets/images/Model3.jpeg')} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  


});
