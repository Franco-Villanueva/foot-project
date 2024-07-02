import React from 'react';
import Main from './src/components/Main'; // Ajusta la ruta según tu estructura de archivos
import { NativeRouter } from 'react-router-native';
import Navigator from './src/components/Navigator'

export default function App() {

  return (
    <NativeRouter>
        <Main/>
        <Navigator />
    </NativeRouter>
  );
}
