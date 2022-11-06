import { StatusBar } from 'react-native';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {

  const [state, setState] = useState(0)

  return (
    <>

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}


