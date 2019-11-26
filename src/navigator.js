import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

import MovieNavigator from './movie/navigator';

export default function App() {
  return (
    <NavigationNativeContainer>
      <MovieNavigator />
    </NavigationNativeContainer>
  );
}
