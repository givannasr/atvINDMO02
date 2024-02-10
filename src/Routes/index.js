import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '../pages/Inicio';
import Cursos from './stackRoutes';
import Contatos from '../pages/Contatos';

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        
      }
    }>
      <Tab.Screen
        name='Inicio'
        component={Inicio}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='home' color={color} size={size} />
          }
        }
      }
      
      />
      <Tab.Screen
        name='Cursos'
        component={Cursos}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='book' color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name='Contatos'
        component={Contatos}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='phone' color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  );

}