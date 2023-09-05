import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Bus from './src/Bus';
import Taxi from './src/Taxi';
import Train from './src/Train';

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <TouchableOpacity onPress={() => alert('favorite')}>
      <Image
        style={{ width: 25, height: 25, marginRight:15 }}
        source={require('./images/star.png')}
      />
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Bus'>
        <Drawer.Screen 
          name="Bus" 
          component={Bus}
          options={{
            //headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              LogoTitle()
            ),
          }} 
        />
        <Drawer.Screen 
          name="Taxi" 
          component={Taxi}
          options={{
            //headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              LogoTitle()
            ),
          }} 
        />
        <Drawer.Screen 
          name="Train" 
          component={Train}
          options={{
            //headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              LogoTitle()
            ),
          }} 
        />
      </Drawer.Navigator>
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
