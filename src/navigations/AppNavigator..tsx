import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/first';
import Second from '../screens/Second';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen 
          name="first"
          component={FirstScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Second"
          component={Second} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>

  );
};

export default AppNavigator;
