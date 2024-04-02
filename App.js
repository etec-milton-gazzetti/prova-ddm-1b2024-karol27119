import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import fundo from "././assets/fundo.png"

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
      <Text>Acessibilidade</Text>
        </ImageBackground>
    </View>
  );
}

  function AboutScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de Sobre</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
    
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});