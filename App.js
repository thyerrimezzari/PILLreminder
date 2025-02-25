import { Appbar, PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Screens/Home";

export function App() {
  const Stack  =createStackNavigator()
  return (
    <PaperProvider>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Home" component={Home}/>
     </Stack.Navigator>
    </NavigationContainer>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    height:"full",
    width:"full",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
