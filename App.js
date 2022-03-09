import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import Course from './screens/Course';
import UserData from './screens/UserData';
import CourseDetails from './screens/CourseDetails';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} >
          {(props)=> <Home {...props} name= {"Education App"}/> }
        </Stack.Screen>
        <Stack.Screen name="Course" component={Course} options = {{headerTitleAlign: 'center', headerTitleStyle: {fontSize: 28}}}/>
        <Stack.Screen name="CourseDetails" component={CourseDetails} options = {{headerTitleAlign: 'center', headerTitleStyle: {fontSize: 28}}}/>
        <Stack.Screen name="UserData" component={UserData} options = {{headerTitleAlign: 'center', headerTitleStyle: {fontSize: 28}}}/>
        <Stack.Screen name="About" component={About} options = {{headerTitleAlign: 'center', headerTitleStyle: {fontSize: 28}}} />
        <Stack.Screen name="Contact" component={Contact} options = {{headerTitleAlign: 'center', headerTitleStyle: {fontSize: 28}}}/>

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
  },
});

