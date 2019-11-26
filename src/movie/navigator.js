import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import {MovieDetails, MovieList, FavMovies} from './screens';
import {routes as movie} from './const';

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={movie.search}
      component={MovieList}
      options={{title: 'Search'}}
    />

    <Tab.Screen
      name={movie.favorite}
      component={FavMovies}
      options={{title: 'Favorite'}}
    />
  </Tab.Navigator>
);

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={movie.list} component={TabNavigator} />
      <Stack.Screen name={movie.details} component={MovieDetails} />
    </Stack.Navigator>
  );
};
