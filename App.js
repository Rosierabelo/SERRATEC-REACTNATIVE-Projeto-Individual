import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './src/pages/Profile';
import Search from './src/pages/Search';
import SearchBar from './src/components/searchBar/SearchBar';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#baaa98" translucent={false} />
      <Appbar style={styles.appBar}> 
        <SearchBar />
        <Appbar.Action 
          icon="bell-outline"
        />

      </Appbar>
      <Tab.Navigator
        shifting={false}
        barStyle={styles.tabBar}
      >
        <Tab.Screen
          name="Início"
          component={Profile}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Meus Livros"
          component={Profile}
          options={{
            tabBarLabel: 'Meus Livros',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-multiple" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Descubra"
          component={Profile}
          options={{
            tabBarLabel: 'Descubra',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="compass-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={Search}
          options={{
            tabBarLabel: 'Pesquisar',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Mais"
          component={Profile}
          options={{
            tabBarLabel: 'Mais',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mainColor = '#f4f1ea';

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: mainColor,
    elevation: 10,
  },
  tabBar: {
    backgroundColor: mainColor,
  },
});


