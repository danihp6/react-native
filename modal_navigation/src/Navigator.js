import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import GamePage from './GamePage'

import Modal from './Modal'
import Modal2 from './Modal2'


const PageStack = createStackNavigator();

function RootPageStack() {
  return (
    <NavigationContainer>
      <PageStack.Navigator headerMode='none'>
        <PageStack.Screen
          name="GamePage"
          component={GamePage} />
        <PageStack.Screen
          name="Modal"
          component={Modal}
          options={modalOptions} />
          <PageStack.Screen
          name="Modal2"
          component={Modal2}
          options={modalOptions} />
      </PageStack.Navigator>
    </NavigationContainer>
  );
}

const modalOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.1, 0.3, 0.7]
      })
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
        extrapolate:  'clamp'
      })
    }
  })
};

export default RootPageStack