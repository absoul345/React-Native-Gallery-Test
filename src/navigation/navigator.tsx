import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GalleryScreen } from '../screens/gallery';
import { PhotoScreen } from '../screens/photo';

import { NAV_PATH_NAMES } from '../constants';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAV_PATH_NAMES.Gallery}>
      <Stack.Screen name={NAV_PATH_NAMES.Gallery} component={GalleryScreen} />
      <Stack.Screen name={NAV_PATH_NAMES.Photo} component={PhotoScreen} />
    </Stack.Navigator>
  );
};
