import React from 'react';
import { NativeRouter } from 'react-router-native';
import Navigation from './src/components/Navigation'

export default function App() {

  return (
    <NativeRouter>
        <Navigation />
    </NativeRouter>
  );
}
