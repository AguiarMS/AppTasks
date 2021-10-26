import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Task} />
      <Tab.Screen name="Nova Task" component={NewTask} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task" >
        <Stack.Screen
          name="Tasks"
          component={Tabs}
          options={{
            title: 'Lista de Tarefas',
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000"
            }
          }}

        />

        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            title: 'Nova Tarefa',
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000"
            }
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes',
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
