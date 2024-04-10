import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

import fundo from "././assets/fundo.png"

function HomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
      <Text style={styles.titulo}>Acessibilidade</Text>
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
    let [fontsLoaded, fontError] = useFonts({
      BebasNeue_400Regular,
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
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
  titulo: {
    fontFamily: "BebasNeue_400Regular",
  }
  
});