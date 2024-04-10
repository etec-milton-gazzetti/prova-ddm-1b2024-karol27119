import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

import fundo from "././assets/fundo.png";
import fundosobre from "././assets/telasobre.png";
import foto from "././assets/eu.jpg";

function Home({navigation}) {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.image}>
      <Text style={styles.titulo}>Acessibilidade</Text>
      <Text style={styles.sub}>DIGITAL</Text>
      <TouchableOpacity style={styles.bot} onPress={()=>navigation.navigate('Sobre')}>
      <Text style={styles.text}>O que é</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.bot} onPress={()=>navigation.navigate('Sobre')}>
      <Text style={styles.text}>História</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.bot} onPress={()=>navigation.navigate('Sobre')}>
      <Text style={styles.text}>Sobre</Text>
      </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}

  function Sobre({navigation}) {
    return (
      <View style={styles.container}>
        <ImageBackground source={fundosobre} resizeMode="cover" style={styles.image}>
        <Image source={foto} style={styles.eu}/>
        <Text style={styles.sub}>Karoline Ramos</Text>
        <Text style={styles.sub}>17 anos</Text>
        <Text style={styles.sub}>RM: 07680</Text>
        <TouchableOpacity style={styles.bot} onPress={()=>navigation.navigate('Home')}>
      <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
        </ImageBackground>
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre}/>
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
  eu:{
    width:250,
    height:250,
    borderRadius:20,
    justifyContent:"center",
    alignSelf:"center",
  },
  titulo: {
    fontFamily: "BebasNeue_400Regular",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    paddingTop:280,
    fontSize:35,
  },
  sub: {
    fontFamily: "BebasNeue_400Regular",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    fontSize:35,
  },
  text: {
    color:"white",
    textAlign:"center",
    fontFamily:"BebasNeue_400Regular",
    fontSize:22,
  },
  bot: {
    backgroundColor:"#1d9bb4",
    borderColor:"black",
    color:"white",
    height:40,
    width:200,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:20,
  }
  
});